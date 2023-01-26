import { json, urlencoded } from "body-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
//import { Server } from "http";
//const app = express();

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
  const Project = require('./models/Project.js')
  const Project_details = require('./models/Project_details.js')

  const {connectToDb , getDb} = require('./db.js')
  let db;
  //connection to db
  connectToDb((err)=> {
    if(!err){
      /*app.listen(5001, () => {
        console.log('app listening on port 5001')
      })*/
      console.log('app listening on port 5001')
      db = getDb()
      console.log(db)
    }
  })
//  let users = []
var project_docs = new Project(
  {projectName: "save animals", projectOwner: "jordan", description: "lets save some dogs",
  imageUrl: "https://www.greenpeace.org/static/planet4-international-stateless/2019/10/10b4aa40-gp0sttxtb.jpg", 
  description_ngo: "we save dogs", category:"animals", location:"hamburg", days:["monday","tuesday"], working_hours:"3"});

  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .get("/message/:name", (req, res) => {
      return res.json({ message: `hello ${req.params.name}` });
    }).get('/project',(req,res) => {
      //res.json({msg:"welcome to api"})
      /*
      db.collection('project_details')
      .find()
      .sort({ title : 1})
      .foreach( project_detail => users.push(project_detail))
      .then(()=> {
        res.status(200).json(users)
      })*/
      const query = req.query;
      project_docs.save(function (err, doc) {
        if (err) return console.error(err);
        console.log(doc.projectName + " saved to bookstore collection.");
      });
      Project.find(query)
      .then(projects => {
        res.json({
          confirmation: 'success',
          data: projects
        })
      })
      .catch(()=> {
        res.status(500).json({error: "could not find the document"})
      })
    }).get('/project_details',(req,res) => {
      //res.json({msg:"welcome to api"})
      /*
      db.collection('project_details')
      .find()
      .sort({ title : 1})
      .foreach( project_detail => users.push(project_detail))
      .then(()=> {
        res.status(200).json(users)
      })*/
      const query = req.query
      Project_details.find(query)
      .then(projects => {
        res.json({
          confirmation: 'success',
          data: projects
        })
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
