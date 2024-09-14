const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const blogRoutes = require('./routes/blog'); // Import blog routes

const app = express();
const PORT = 5000;
const url = process.env.MONGO_URL;

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse JSON bodies
app.use('/uploads', express.static('uploads')); // Serve static files from uploads directory

// MongoDB connection
mongoose.connect(url)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('Error:', err));

// Routes
app.use('/api/blogs', blogRoutes); // Use blog routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
