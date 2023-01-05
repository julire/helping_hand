import { json, urlencoded } from "body-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";


mongoose.set('strictQuery', false)
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database. Error...', err);
  process.exit();
});

export const createServer = () => {
  const app = express();
  const Project = require('../models/Project')

  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .get("/message/:name", (req, res) => {
      return res.json({ message: `hello ${req.params.name}` });
    })
    .get("/healthz", (req, res) => {
      return res.json({ ok: true });
    })
    .get('/project', (req, res) => {
      const query = req.query
      Project.find(query)
      .then(projects => {
        res.json({
          confirmation: 'success',
          data: projects
        })
      })
      .catch
    });

  return app;
};
