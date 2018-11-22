const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db
  .collection('Users')
  .findOneAndUpdate
  (
  {_id:new ObjectID('5bee35ec0e7b5f30b001ab9b')} 
 //   ,{_id:'5bee35ec0e7b5f30b001ab9b'}, 
    ,{
      $set: {name: 'Chris Park'}
      ,$inc: {age: 20} 
    }
    //,{returnOriginal:'My Future comes from my effort today.'}
    )
    .then
  (
    (result)=>{console.log(result);}
  );
});

