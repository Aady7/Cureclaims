const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const mongoose=require("mongoose");

require("./config.js");
 require("./config.js");
const app=express();

var corsOptions = {
    origin: "http://localhost:5000"
  };
  app.use(cors(corsOptions));
  app.use(express.json())
  app.use(bodyParser.urlencoded({ extended: true }));
  
  const UserRoute = require("../backend/routers/userrouter.js")


  mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
  app.get("/", function(res,req){
   req.json({message:"Welcome to cureclaims"})
  })


  app.listen(5000, function(res,req){
   console.log("Listening to the port 5000");
  })