const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const app = express()
const PORT = config.get('serverPort')
const cors = require('cors')
const registration = require('./routes/user')

app.use(cors())
app.use(express.json())

app.post('/api/registration', cors(), registration);

const start = async () => { 
    try {
        await mongoose.connect(config.get('dbUrl'), {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => {
            console.log(`Server is working on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()