require('dotenv').config()

const express = require('express')
const app = express()

var mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const taskRouter = require('./routes/tasks')
app.use('/tasks', taskRouter)

const userRouter = require('./routes/users')
app.use('/users', userRouter)


app.listen(3002, () => console.log('server started'))
