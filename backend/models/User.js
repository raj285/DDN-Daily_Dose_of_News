const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email_id:{
        type:String,
        required:true,
        unique:true,     
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});
const user=mongoose.model('User',UserSchema);
// user.createIndexes();// to get uniqueness
module.exports=user;
//(name and schema) we are exporting