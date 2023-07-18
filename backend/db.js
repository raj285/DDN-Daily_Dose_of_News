const mongoosem=require('mongoose');
// const mongoURI = "mongodb://localhost:27017/Logindata";// got this from mongo app
const mongoURI = "mongodb://127.0.0.1:27017/Logindata";
const connnextToMongo=()=>{
    mongoosem.connect(mongoURI)
    console.log("connected to mongose succesfully")
}
module.exports=connnextToMongo;