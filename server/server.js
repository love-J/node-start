var express = require ('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app= express(); 

app.use(bodyParser.json());
app.post('/todos', (req, res)=>{
 // console.log(req.body); 
 // postman 에서 보낸 body, raw, Json 이 cmd창에 보임
 var todo = new Todo({
   text: req.body.text
 });
 
 todo.save().then((doc)=>{
   res.send(doc);
 }, (e)=>{
    res.status(400).send(e);
 });
});

app.listen(3000, ()=>{
  console.log('Started on port 3000');
});

// var otherTodo = new Todo({
//   text: 'Clean Rooms',
//   completed: true, 
//   completedAt: 333
// });

// otherTodo.save().then((doc)=>{
//   console.log('Saved otherTodo', doc);
// }, (e)=>{
//   console.log('Unable to save otherTodo')
// });


