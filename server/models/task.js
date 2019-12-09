console.log("task.js is running");
const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
	title:{
		type: String,
		required: true,
		minlength: [2, "Title must be more than one letter"]
	},
	description:{
		type: String,
		required: true,
	},
	completed:{
		type: Boolean,
		default: false,
	},
}, {timestamps: true});

mongoose.model("Task", TaskSchema);