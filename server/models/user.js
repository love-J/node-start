var mongoose = require('mongoose');
//가상의 모델을 만들어서 
var User = mongoose.model('User', {
  email:{
    type:String, 
    required:true, 
    trim: true, 
    minlength:1
  }
}); 

//모델의 스키마를 따라 user라는 collection이 만들어짐.  
var user = new User({
  email: '    chrisPark@example.com  ' 
});

user.save().then((doc)=>{
  console.log('User saved', doc);
}, (e)=>{
  console.log('Unable to save user', e);
});

module.exports = {User};