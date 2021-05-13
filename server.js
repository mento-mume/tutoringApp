const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js')
const app = express()
const tutors = require('./routes/tutors');
const { urlencoded } = require('express');
dotenv.config({path: './config/config.env'})

connectDB()


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api/tutors',tutors)
const port= process.env.PORT||5000


//const port = PORT|| process.env.Port
app.listen(port,()=>console.log(`app running on ${port}`))