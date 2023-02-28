const db = require("./app/models");

const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: true
};
app.set('view engine', 'ejs');
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// const db = require("./app/models");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// simple route
app.get("/", (req, res) => {
  res.render('pages/index');
});

require("./app/routes/tutorial.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/projects.routes")(app); 

// get all projects for a given user
app.get("/users/:userid/projects", (req, res) => {
  const userid = req.params.userid;

  db.projects.findAll({ where: { userid: userid } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while retrieving projects for user."
      });
    });
});

// set port, listen for rq
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
