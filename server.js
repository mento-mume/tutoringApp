const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js')
const app = express()

dotenv.config({path: './config/config.env'})

connectDB()



app.use(express.json())
const PORT = process.env.PORT||5000


const port = PORT|| process.env.Port
app.listen(port,()=>console.log(`app running on ${port}`))