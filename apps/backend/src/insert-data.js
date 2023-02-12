const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://helping_hand:X26igJL9@clusterhelpinghand.c1myh2s.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
 // The database to use
const dbName = "project";

async function run() {
    try {

         await client.connect();

         console.log("Connected correctly to server");

         const db = client.db(dbName);

         // Use the collection "people"

         const col = db.collection("project_details");

         // Construct a document                                                                                                                                                              

         let doc = {

             //"name": { "first": "Alan", "last": "Turing" },

             "title": "help amanpreet",
             "description": "create a project on behalf of amanpreet",
             "image_url":"amanImage"
             //"birth": new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
             //"death": new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
             //"contribs": [ "Turing machine", "Turing test", "Turingery" ],

             //"views": 1250000

         }

         // Insert a single document, wait for promise so we can read it back

         const p = await col.insertOne(doc);

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