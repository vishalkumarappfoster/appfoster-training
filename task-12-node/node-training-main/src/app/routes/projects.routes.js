module.exports = app => {
  const projects = require("../controllers/projects.controller.js");
  var router = require("express").Router();
 
  // Create a new Project
  router.post("/", projects.create);
 
  // Retrieve all Projects
  router.get("/", projects.findAll);
  
  // Retrieve a single Project with id
  router.get("/:id", projects.findOne);
  
  // Update a Project with id
  router.put("/:id", projects.update);
 
  // Delete a Project with id
  router.delete("/:id", projects.delete);
 
  // Delete all Projects
  router.delete("/", projects.deleteAll);

  app.use('/api/projects', router);
  
  // app.get("/api/users/:userId/projects", projects.findAllByUser);

  app.get('/api/users/:userId/projects', (req, res) => {
    const userId = req.params.userId;
    
  });

};
