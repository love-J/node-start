//const MongoClient = require('mongodb').MongoClient;
//identical with below
const {MongoClient} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/Users', (err, client)=>{
  if(err){
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  //db 설정
  const db = client.db('Users');

  db.collection('Users').insertOne({
    name: 'Love Happy Mom',
    Location:'The Bossom of Jesus',
    text:'Jesus will hug her into his kingdom.',
    _id:01,
    completed:false
  },(err, result)=>{
    if(err){
      return console.log('Unable to insert todo', err);
    }
    //console.log(JSON.stringify(result.ops, undefined, 2));
    console.log(result.ops);
  });

  client.close();
});