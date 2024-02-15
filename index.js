require('dotenv').config();
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/first',(req,res)=>{
    res.send("first log bro")
})

app.get('/login',(req,res)=>{
    res.send('<h1>Aaye hoto login to krlo</h1>')
})

app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${port}`)
})
// console.log("First Logs of Backend");