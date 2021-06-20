const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  Heading: {
    type: String,
    required: true,
  },
  blog: {
    type: String,
    required: true,
  },
  UserId: {
    type: String,
    required: true,
  }  
});

module.exports = mongoose.model("Blog" , blogSchema , "Blog");