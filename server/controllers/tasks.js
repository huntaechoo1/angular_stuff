console.log("tasks.js is running");

const mongoose = require("mongoose");
const Task = mongoose.model("Task");


class TaskController{
	getAll(req,res){
		Task.find({})
			.then(tasks => res.json({tasks}))
			.catch(err=> res.json(err));
	}

	create(req,res){
		let newTask = new Task(req.body);
		newTask.save()
			.then(()=> res.json({"msg": "Yes, Master"}))
			.catch(err => res.json(err));
	}

	getOne(req,res){
		let _id = req.params._id;
		Task.findOne({_id})
			.then(task => res.json({task}))
			.catch(err => res.json(err));
	}

	update(req, res){
		let _id = req.params._id;
		Task.findByIdAndUpdate({_id}, req.body, {runValidators: true})
			.then(() => res.json({"msg": "Yes, Master"}))
			.catch(err => res.json(err));
	}

	delete(req, res){
		let _id = req.params._id;
		Task.findByIdAndDelete({_id})
			.then(() => res.json({"msg": "Yes, Master"}))
			.catch(err => res.json(err));
	}

}

module.exports = new TaskController();