import { json, urlencoded } from "body-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import { Server } from "http";

const app = express();

//mongoose.set('strictQuery', false)
//mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true,  useUnifiedTopology: true})
/*mongoose.connect("mongodb+srv://helping_hand:X26igJL9@clusterhelpinghand.c1myh2s.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database. Error...', err);
  process.exit();
});
*/
export const createServer = () => {
  const app = express();
  const {connectToDb , getDb} = require('./db')
  let db;
  //connection to db
  connectToDb((err)=> {
    if(!err){
      /*app.listen(5001, () => {
        console.log('app listening on port 5001')
      })*/
      console.log('app listening on port 5001')
      db = getDb()
    }
  })
  let users = []

  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .get("/message/:name", (req, res) => {
      return res.json({ message: `hello ${req.params.name}` });
    }).get('/project',(req,res) => {
      res.json({msg:"welcome to api"})
      db.collection('project_details')
      .find()
      .sort({ title : 1})
      .foreach( project_detail => users.push(project_detail))
      .then(()=> {
        res.status(200).json(users)
      })
      .catch(()=> {
        res.status(500).json({error: "could not find the document"})
      })
    })
    .get("/healthz", (req, res) => {
      return res.json({ ok: true });
    });

  return app;
};
