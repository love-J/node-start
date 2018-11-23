var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text:{
    type: String, 
    required: true, 
    minlength:1, 
    trim: true
  },
  completed:{
    type: Boolean, 
    default:false
  }, 
  completedAt:{
    type:Number, 
    default: null
  }
});

// var newTodo = new Todo({
//   text:'Cook dinner'
// });

// newTodo.save().then((doc)=>{
//   console.log('Saved todo', doc);
// }, (e)=>{
//   console.log('Unable to save todo')
// });



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


module.exports = {Todo};