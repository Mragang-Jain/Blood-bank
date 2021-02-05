const express = require('express')
const app = express()
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const url = 'mongodb://localhost/bloodbank'
const port = 5000
const cors = require('cors')
const User = require("./src/controllers/user")
const Donor = require("./src/controllers/blood-donor")

mongoose.connect(url, {useNewUrlParser:true})
const conn = mongoose.connection

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

conn.on('open',()=>{
    console.log("Connected to mongodb.....")
})

app.use('/user', User )
app.use('/donor', Donor)


app.listen(port, () =>{
    console.log('App is running on port 3000')
})