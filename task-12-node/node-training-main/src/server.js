const { User } = require('./app/models');
const { Projects } = require('./app/models');
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
const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
// simple route
app.get("/api", (req, res) => {

  res.render('pages/index');
});
app.get('/users/:userid/projects', async (req, res) => {
  
  // const userid =  req.params.userid;.
  // const user = await User.findOne({ where: { id: userid } });
  // console.log("user");
  // const projects = await Projects.findAll({ where: { userid: userid } });
  // res.json(projects);
});
require("./app/routes/tutorial.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/projects.routes")(app); 

// set port, listen for rq
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


