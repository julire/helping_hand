import { json, urlencoded } from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {
  createProject,
  deleteProject,
  getProjectById,
  getProjects,
  updateProject,
} from './api/projects.route.js';

export const createServer = () => {
  const app = express();

  const { connectToDb, getDb } = require('./db.js');
  let db;
  //connection to db
  connectToDb((err) => {
    if (!err) {
      console.log('app listening on port 5001');
      db = getDb();
      console.log(db);
    }
  });

  app
    .disable('x-powered-by')
    .use(morgan('dev'))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())

    //  Routes

    .get('/projects', getProjects)

    .get('/projects/:id', getProjectById)

    .post('/projects', createProject)

    .put('/projects/:id', updateProject)

    .delete('/projects/:id', deleteProject)

    .get('/healthz', (req, res) => {
      return res.json({ ok: true });
    });
  return app;
};
