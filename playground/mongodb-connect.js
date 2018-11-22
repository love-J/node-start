//const MongoClient = require('mongodb').MongoClient;
//identical with below
//db 호출
const {MongoClient} = require('mongodb');

// var user = {name:'so young', dream: 'pilot'};
// var {name}= user;
// console.log(name);


// var obj = new ObjectID();
// console.log(obj);  -- 새로운 아이디 번호를 생성해서 출력해준다. 


//db 연결 
MongoClient.connect('mongodb://localhost:27017/Futurecreator', (err, client)=>{
  if(err){
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


  //client에 db를 연결해서 이걸 db로 받음. 
  const db = client.db('Futurecreator');
  //db 아래 table 생성
  db.collection('Creator').insertOne({
    name: 'Love Happy Mom',
    Location:'The Bossom of Jesus',
    text:'Jesus will hug her into his kingdom.',
    _id:02,
    //같은 아이디로 입력하면 node로 실행해도 더 이상 insert되지 않는다. 
    completed:false
  },(err, result)=>{
    if(err){
      return console.log('Unable to insert todo', err);
    }
    //console.log(JSON.stringify(result.ops, undefined, 2));
    console.log(result.ops);
    //console.log(result.ops[0]._id.getTimestamp());
  });


  // db.collection('BeMaster').insertOne({
  //   name: 'What I will become comes from me', 
  //   Location:'From where I am',
  //   age: 50

  // }, (err, result)=>{
  //   if(err){
  //     return console.log('Impossible to insert BeMaster', err);
  //   }
  //   console.log(result.ops);
  // });

  client.close();
});