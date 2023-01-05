const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.

const uri =

  "mongodb+srv://helpingHand:X26igJL9@clusterhelpinghand.3kaeqwy.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {

  try {

    await client.connect();

    // database and collection code goes here

    // find code goes here

    // iterate code goes here

    const db = client.db("sample_mflix");
    const coll = db.collection("users");
    
    const filter = {name:"amanpreet"};
    const updateDoc = {
         $set: { email: 'aman@gm.com'}
    };

    const result = await coll.findOneAndUpdate(filter,updateDoc);

    console.log("number of docs updated"+result.modifiedCount);
  } finally {

    // Ensures that the client will close when you finish/error

    await client.close();

  }

}

run().catch(console.dir);
