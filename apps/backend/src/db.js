import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './dotenv.env' }); //import config.env file

const DB = process.env.DATABASE_URL;
let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    mongoose
      .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
      .then((client) => {
        dbConnection = client.db;
        return cb();
      })
      .catch((err) => {
        console.log('I am here');
        console.log(err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
