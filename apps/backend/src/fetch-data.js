const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.

const uri =

  "mongodb+srv://helping_hand:X26igJL9@clusterhelpinghand.c1myh2s.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {

  try {

    await client.connect();

    // database and collection code goes here

    // find code goes here

    // iterate code goes here

    const db = client.db("sample_mflix");
    const coll = db.collection("users");
    const cursor = coll.find();
    
    await cursor.forEach(console.log);
    
  } finally {

    // Ensures that the client will close when you finish/error

    await client.close();

  }

}

run().catch(console.dir);
