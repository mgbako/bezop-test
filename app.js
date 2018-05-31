const path = require('path');
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const passport = require("passport");
const cors = require('cors');
const app = express();

const db = require("./config/keys").mongoURI;

const port = process.env.PORT || 5000;



// SET CORS
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(bodyParser.json({
  type: "application/json"
}));

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const mediaRoutes = require('./routes/api/medias');

app.use(morgan("combined"));

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(error => console.log(error));

// Passport Middleware
app.use(passport.initialize());

// Use Passport
require("./config/passport")(passport);

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
app.use('/api/medias', mediaRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.listen(port, () => {
  console.log("Server running on " + "http://localhost:" + port);
});

// [END hello_world]

//if (module === require.main) {
// [START server]
// Start the server
/*  const server = app.listen(process.env.PORT || 8081, () => {
   const port = server.address().port;
   console.log(`App listening on port ${port}`);
 }); */
// [END server]
//}

module.exports = app;