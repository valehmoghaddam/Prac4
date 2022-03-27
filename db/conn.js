



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ValehM:<z7txqEwESwwOrI32@cluster0.fbqnu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

let dbconnection;

// importing another java script file to the code conenctin.js

module.exports = {

    connect: (callback) => {

        client.connect((err, db) => {
            if (err || !db) 
            return callback(err);

            dbconnection =db.db ("pitch-project");

            console.log("connected to kongo db Atlas");
            callback();
          });

    },
    getDB : () =>{
        return dbconnection
    }
}

// client.connect(err => {
//   const collection = client.db("pitch-project").collection("projects");
//   // perform actions on the collection object
//   client.close();
// })