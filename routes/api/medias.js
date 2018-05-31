const fs = require('fs');
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const multer = require("multer");
const path = require("path");
const Media = require('../../models/Media');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/assets/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  }
});

const upload = multer({
  storage: storage
}).single("file");

router
  .get("/", (req, res, next) => {
    Media.find({
        deleted: false
      })
      .then(medias => {
        res.status(200).json(medias);
      })
      .catch(error => {
        res.status(404).json({
          Media: 'No Media file found'
        })
      })
  })
  .get("/alltrash", (req, res, next) => {
    Media.find({
        deleted: true
      })
      .then(medias => {
        res.status(200).json(medias);
      })
      .catch(error => {
        res.status(404).json({
          Media: 'No Media file found'
        })
      })
  })
  .post("/", (req, res, next) => {
    upload(req, res, err => {
      if (err) {
        res.json({
          error: err
        });
      } else {
        let hosturl = process.env.API_URL || 'http://localhost:5000';
        const newMedia = new Media({
          path: `${hosturl}assets/uploads/${req.file.filename}`
        });

        newMedia.save()
          .then(medias => {
            res.status(200).json(medias);
          });

        console.log("req.file", req.file);

        res.json({
          path: `${hosturl}assets/uploads/${req.file.filename}`
        });
      }
    });
  })
  .put("/:media_id/trash", (req, res) => {
    Media.findById(req.params.media_id)
      .then((media) => {
        console.log('media', media)
        if (media) {
          Media.findOneAndUpdate({
              _id: media._id
            }, {
              $set: {
                deleted: true
              },
            })
            .then(media => res.status(200).json({
              media: media
            }))
        }
      })
      .catch(error => {
        res.status(404).json({
          media: "no media file found in the DataBase"
        });
      });
  })

  .delete("/:media_id", (req, res) => {
    Media.findById(req.params.media_id)
      .then((res) => {
        let mediaPath = res.path;

        console.log(mediaPath)
        return;
        res.remove()
          .then(res => {
            fs.unlink(mediaPath, (err) => {
              if (err) {
                res.status(500).json({
                  media: "Error occurred on the server"
                })

                res.status(200).json({
                  media: "media file Deleted"
                })
              }
            })
          })
          .catch(error => {
            res.status(404).json({
              media: "no media file found"
            });
          });

      })
      .catch(error => {
        res.status(404).json({
          media: "no media file found in the DataBase"
        });
      });
  });


module.exports = router;