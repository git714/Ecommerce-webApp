const mongoose = require("mongoose");

const Schema = mongoose.Schema;

userSchema = new Schema(
    {
        
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: {
            type: String,
            required:true
        },
        phone:{ type: String, required: true }
        // file:{
        //     type:String
        // }
    },
    {
        timestamps: true
    }
);


const User= mongoose.model("User",userSchema);


module.exports=User;