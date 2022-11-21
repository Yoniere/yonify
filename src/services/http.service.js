import Axios from 'axios'
// import router from '../router'
import { HashRouter as Router} from 'react-router-dom';
const BASE_URL = process.env.NODE_ENV === 'production' ?
    '/api/' :
    '//localhost:3030/'


var axios = Axios.create({
    withCredentials: true
})
// 'https://api.spotify.com/v1/playlist/'
export const httpService = {
    get(endpoint, data, params) {
        return ajax(endpoint, 'GET', data, params)
    },
    post(endpoint, data) {
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint, data) {
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint, data) {
        return ajax(endpoint, 'DELETE', data)
    }
}

async function ajax(endpoint, method = 'GET', data = null) {
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data,
            params: (method === 'GET') ? data : null
        })
        return res.data
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data:`, data)
        console.dir(err)
        if (err.response && err.response.status === 401) {

            Router.push('/login')
        }
        throw err
    }
}