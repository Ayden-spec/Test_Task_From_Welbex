import axios from 'axios'

let domain = 'http://localhost:5000';

export const get_db = async (id, callback) => {
    try {
        const response = await axios.get(`http://localhost:5000/${id - 1}`)
        callback(response.data)
    } catch (e) {
        console.log(e)
    }
}