const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const Users_servicesSchema = new Schema({
image:{
    type:String,
    required:true
},
description:{
type:String,
required:true
},
type:{
    type:String,
    required:true
},
pdf:{
    type:String,
    required:false
}
});

const Users_services = mongoose.model('Users_services', Users_servicesSchema);

module.exports = Users_services;
