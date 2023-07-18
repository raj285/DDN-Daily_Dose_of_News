const mongoose = require('mongoose');
const { Schema } = mongoose;
const CommentSchema = new Schema({
    comnt:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email_id:{
        type:String,
        required:true,
        Unique:true        
    }
});
module.exports=mongoose.model('comment',CommentSchema);