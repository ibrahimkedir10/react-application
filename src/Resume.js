// models/Resume.js

const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  name: String,
  email: String,
  resumeUrl: String,
});

module.exports = mongoose.model('Resume', resumeSchema);
