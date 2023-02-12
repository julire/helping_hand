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

         // Use the collection "project_details"

         const col = db.collection("project_details");

         // Construct a document                                                                                                                                                              

         const doc = {
             //"name": { "first": "Alan", "last": "Turing" },
             "title": "help amanpreet",
         }

         // Insert a single document, wait for promise so we can read it back

         const result = await col.findOneAndDelete(doc);

         // Find one document

         //const myDoc = await col.findOne();

         // Print to the console

         //console.log(myDoc);
         console.log("Number of documents deleted: " + result.deletedCount);
        } catch (err) {

         console.log(err.stack);

     }

 

     finally {

        await client.close();

    }

}

run().catch(console.dir);