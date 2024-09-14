const mongoose = require('mongoose');

// Blog Schema
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String, // URL of the image (uploaded via Multer or directly)
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create Blog model
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
