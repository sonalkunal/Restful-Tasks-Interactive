const mongoose = require('mongoose');
const TaskCtrl = require('./../controllers/TaskCtrl.js');

module.exports = app => {
app.get('/tasks', TaskCtrl.index);
app.post('/tasks', TaskCtrl.save);
app.get('/tasks/:id', TaskCtrl.find);
app.put('/tasks/:id', TaskCtrl.update);
app.delete('/tasks/:id', TaskCtrl.delete);

}