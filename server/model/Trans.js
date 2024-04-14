const mongoose = require("mongoose");

const transSchema = new mongoose.Schema(
    {
        name:{
            type:String,
           
              },

        price:{
            type:Number,
         
          
        },
        
        description: {
            type:String,
          
        
        },

        datetime:{
            type:Date,
        }
    }
);

module.exports = mongoose.model("Trans", transSchema);