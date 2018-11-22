const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  
  const db = client.db('TodoApp');
  
  //deleteMany
  // db.collection('Todos').deleteMany({text:'Love your enemy'}).then((result)=>{
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text:'Mere talk leads to poverty'}).then((result)=>{
  //   console.log(result);
  // });

  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    console.log(result);
    //console.log(JSON.stringify(result, undefined, 2));
  });

});