const mongoose = require("mongoose")
//Assign MongoDB connection string to Uri and declare options settings

// Declare a variable named option and assign optional settings

// Connect MongoDB Atlas using mongoose connect method
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useUnifiedTopology: true,
    // Other options...
  }).then(() => {
console.log("Database connection established!");
},err => {
{
console.log("Error connecting Database instance due to:", err);
}
});