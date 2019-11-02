const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({

  user_name: {
    type: String,
    required: true
  },
  name_ar: {
    type: String,
    required: true
  },
  name_en: {
    type: String,
    required: true
  },
  section: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  branch_number: {
    type: String,
    required: true
  },
  city_number: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  unified_number: {
    type: String,
    required: false
  },
  times:{
     type: Array ,
     required:false
  },
  aboutus_ar:{
    type: String,
    required: false
  },
  aboutus_en:{
    type: String,
    required: false
  },
  social_media:{
    Facebook:String,
    Twitter:String,
    Google:String,
    Instagram:String,
    Whatsapp:String
  },
  images:{
    type: [String],
    max:7
  },
  register_date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
