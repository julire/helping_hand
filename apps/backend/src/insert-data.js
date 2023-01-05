const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://helpingHand:X26igJL9@clusterhelpinghand.3kaeqwy.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
 // The database to use
const dbName = "sample_mflix";

async function run() {
    try {

         await client.connect();

         console.log("Connected correctly to server");

         const db = client.db(dbName);

         // Use the collection "people"

         const col = db.collection("users");

         // Construct a document                                                                                                                                                              

         let personDocument = {

             //"name": { "first": "Alan", "last": "Turing" },

             "name": "amanpreet",
             //"birth": new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
             "email": "aman@test.com",
             //"death": new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
             "password":"abcdefg"
             //"contribs": [ "Turing machine", "Turing test", "Turingery" ],

             //"views": 1250000

         }

         // Insert a single document, wait for promise so we can read it back

         const p = await col.insertOne(personDocument);

         // Find one document

         const myDoc = await col.findOne();

         // Print to the console

         console.log(myDoc);

        } catch (err) {

         console.log(err.stack);

     }

 

     finally {

        await client.close();

    }

}

run().catch(console.dir);