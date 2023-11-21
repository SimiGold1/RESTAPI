// Import mongoose
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  // User's name, a required field
  name: { type: String, required: true },
  // User's email, a required and unique field
  email: { type: String, required: true, unique: true },
  
});

// Create the User model using the defined schema
const User = mongoose.model('User', userSchema);

// Export the User model to be used in other files
module.exports = User;
