const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MediaSchema = new Schema({
  path: {
    type: String,
    required: true
  },
  deleted: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Media = module.exports = mongoose.model('medias', MediaSchema);