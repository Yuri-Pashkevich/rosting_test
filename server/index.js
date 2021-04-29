const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const app = express()
const PORT = config.get('serverPort')
const cors = require('cors')
const User = require('./models/User')

app.use(cors())
app.use(express.json())

app.post('/api/registration', cors(), async (req, res) => {
    try {
        const {name, tel} = req.body
        console.log(name, tel)
        const candidate = await User.findOne({tel})
        if(candidate) {
            return res.status(400).json({message: `Пользователь с таким телефоном уже существует`})
        }
        const user = new User({name, tel})
        await user.save()
        return res.status(200).json({message: 'Ваши данные сохранены'})
    } catch (e) {
        console.log(e)
        res.send({message: 'Ошибка сервера'})
    }
});

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