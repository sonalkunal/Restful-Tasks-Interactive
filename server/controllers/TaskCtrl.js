const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {
    index: function(req,res){
        Task.find({}, (err,tasks)=> {
            if(err){
                console.log("error loading all tasks");
                res.json({message: "Error", error:err})
            } else {
                console.log(tasks);
                res.json({message: "Success", data: tasks});
            }


        })
    },
    save: function(req,res){
        let newTask = new Task(req.body);
        newTask.save(function(err){
            if(err){
                console.log("error saving newTask");
                res.json({message: "Error", error:err })
            } else {
                res.json({message:"Success", data: task});
            }
        })
    },
    find: function(req,res){
        Task.find({_id: req.params.id}, (err,task) => {
            if(err){
                console.log("error finding task");
                res.json({message: "Error", error:err})
            } else {
                res.json({message: "Success", data:task});
            }
        })
    }, 
    update: function(req,res){
        Task.update({_id: req.params.id},req.body,function (err) {
            if(err){
                console.log("error updating task");
                res.json({message: "Error", error:err});
            } else {
                res.json("Successful update");
            }

        })
    },
    delete: function(req,res){
        Task.remove({_id: req.params.id},(err)=>{
            if(err){
                console.log("error finding task to delete");
                res.json({ message: "Error", error:err})
            } else {
                res.json("successful delete");
            }
        })
    }

}
