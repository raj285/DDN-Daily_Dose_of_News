const expressm=require('express')
const routerm=expressm.Router()

routerm.get('/',(req,res)=>{
    obj={
    }
    res.json([])
})
module.exports=routerm