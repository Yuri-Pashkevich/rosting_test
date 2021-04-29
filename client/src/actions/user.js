import axios from 'axios'

// Делаем post-запрос на сервер с данными из формы

export const registration = async (name, tel) => {
    try {
        const response = await axios.post('http://localhost:5000/api/registration', {
            name,
            tel
        }) 
        console.log(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }  
}