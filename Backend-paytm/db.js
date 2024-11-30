require('dotenv').config()
const mongoose=require("mongoose");
mongoose.connect(process.env.MONGO_DB)



const userSchema=new mongoose.Schema({

    firstName:{
        type: String,
        required: true,
        maxLength: 50
    },
    lastName:{
        type: String,
        required: true,
        maxLength: 50
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 50,
      },
      password: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 12
       },

});
const accountSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    balance:{
        type: Number,
        required:true
    }
});
const User=mongoose.model('User',userSchema);
const Account=mongoose.model('Account',accountSchema)
module.exports={
    User,
    Account
};