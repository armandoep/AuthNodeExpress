const express = require('express')
const db = require('./config/database')
const app = express()

//Import routes
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')

//Connect to DB
db.connect()

//Middleware
app.use(express.json())

//Route Middlewares
app.use('/api/user', authRoute)
app.use('/api/posts', postRoute)

app.listen(3000, ()=> console.log('Server is running'))
