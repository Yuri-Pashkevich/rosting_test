const User = require('../models/User')

const registration = async (req, res) => {
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
}

module.exports = registration