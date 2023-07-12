import axios from "axios";




const api = axios.create({
    baseURL: 'https://gorest.co.in/public/v2',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': 'Bearer 15f37065c7914fd9fd5f9a787257be2e181c176d18e6349d9a2e974104c49097'
    },
    credentials: true
})
export default api