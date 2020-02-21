const router = require("express").Router();

const db = require("../data/dbConfig");

//Get all projects
router.get("/", (req, res) => {
  db("projects")
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ Error: "Can't retrieve projects" });
    });
});

//Get a specific project
router.get("/:id", (req, res) => {
  const id = req.params;
  db("projects")
    .where(id)
    .first()
    .then(project => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ Error: "Specified project does not exist" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ Error: "Can't retrieve that project" });
    });
});

//Add a new project
router.post("/", (req, res) => {
  const newProject = req.body;
  db("projects")
    .insert(newProject, "id")
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(400).json({ Error: `Unable to add ${newProject}` });
    });
});

module.exports = router;
