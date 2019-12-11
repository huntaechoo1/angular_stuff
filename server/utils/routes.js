console.log("routes.js is running");
const Task = require("../controllers/tasks");

module.exports = function(app) {
    app.get("/tasks", Task.getAll);
    app.post("/create", Task.create);
    app.get("/tasks/:_id", Task.getOne);
    app.put("/tasks/:_id", Task.update);
    app.delete("/tasks/:_id", Task.delete);
}