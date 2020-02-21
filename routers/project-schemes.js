const db = require("../data/dbConfig");

module.exports = {
  findTasks,
  addTask,
  getTasksByProject
};

function findTasks(id) {
  return db("task")
    .where({ id })
    .select();
}

function addTask(task) {
  return db("task")
    .insert(task)
    .then(ids => {
      return findTasks(ids[0].first());
    });
}

function getTasksByProject(id) {
  return db("task")
    .join("projects", "task.project_id", "projects.id")
    .where("task.project_id", id)
    .select(
      "projects.name",
      "projects.description",
      "task.description",
      "task.notes",
      "task.completed"
    );
}
