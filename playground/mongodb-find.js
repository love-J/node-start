//Mongo Client DB에 연결. 
const {MongoClient, ObjectID} = require('mongodb');


//원하는 db에 접근 
MongoClient.connect('mongodb://localhost:27017/Users', (err, client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connnected to MongoDB server');
  const db = client.db('Users');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5bee3593d6b3fd25248bf5ee')
  // }).toArray().then((docs) =>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err) =>{
  //   console.log('Unable to fetch todos', err);
  // });


  //그 db에서 하고자 하는 일을 한다. 
  // db.collection('Todos').find().count().then((count) =>{
  //   console.log(`Todos count: ${count}`);
    
  // },(err) =>{
  //   console.log('Unable to fetch todos', err);
  // });

db.collection('Users').find({name:'so young park'}).toArray().then((docs)=>{console.log(JSON.stringify(docs, undefined, 2));

});
//client.close();
});