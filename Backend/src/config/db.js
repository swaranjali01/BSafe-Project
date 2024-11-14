// src/config/db.js
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/project").then(function()
{
    console.log("connected");
})
.catch(function(err){
 console.log(err);
})
