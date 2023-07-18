const connnextToMongo=require('./db');
const express = require('express')
var cors=require('cors')
connnextToMongo();
const app = express()
const port = 5000
app.use(cors())
app.use(express.json())
app.use('/api/Authen',require('./routes/Authen'))
app.use('/api/Cmtrout',require('./routes/Cmtrout'))
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
