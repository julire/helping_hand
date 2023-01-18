//const {MongoClient} = require('mongodb')
import mongoose from "mongoose";
import dotenv from 'dotenv';
//const dotenv = require("dotenv");  //require dotenv package
dotenv.config({ path: "./dotenv.env" }); //import config.env file
//dotenv.config(); //import config.env file
//require('dotenv').config();
const DB = process.env.DATABASE_URL;  
//const Port = process.env.PORT;
let dbConnection
console.log(typeof process.env.DATABASE_URL);
module.exports = {
    connectToDb: (cb) => {
        //MongoClient.connect('mongodb+srv://helping_hand:X26igJL9@clusterhelpinghand.c1myh2s.mongodb.net/?retryWrites=true&w=majority')
        mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true,
            useUnifiedTopology: true})
        .then((client) => {
            dbConnection = client.db
            return cb()
        })
        .catch(err => {
            //console.log(`can not connect to database, ${err}`);
            //console.log("error for db.js")
            console.log("I am here")
            console.log(err)
            return cb(err)
        })
    },
    getDb: () => dbConnection
}