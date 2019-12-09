console.log("routes.js is running");
const Task = require("../controllers/tasks");

module.exports = function(app) {
    app.get("/tasks", Task.getAll);
    app.post("/create", Task.create);
    app.get("/tasks/:_id", Task.getOne);
    app.post("/tasks/edit/:_id", Task.update);
    app.get("/tasks/delete/:_id", Task.delete);
}