const mongoose = require('mongoose');

const TaskSchema =  new mongoose.Schema ({
    title : { type : String, required: true, minlength: 3, maxlength:64},
    description: { type: String, required: true, minlength: 3, maxlength: 255},
    completed: {type: Boolean, required:true}
}, {timestamps:true});

const Task = mongoose.model("Task", TaskSchema);