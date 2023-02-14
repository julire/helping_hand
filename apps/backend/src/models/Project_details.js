import mongoose from "mongoose";

const Project_details = new mongoose.Schema({
title: {type:String, trim:true, default:''},
description: {type:String, trim:true, default:''},
image_url: {type:String, trim:true, default:''}
})

//module.exports = mongoose.model('Project_details', Project_details)
module.exports = mongoose.model('Project_details', new mongoose.Schema({
    title: {type:String, trim:true, default:''},
    description: {type:String, trim:true, default:''},
    image_url: {type:String, trim:true, default:''}
    }),'Project_details');