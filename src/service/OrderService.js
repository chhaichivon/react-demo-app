import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL
const SERVER_API_URL_ORDERS = API_URL + process.env.REACT_APP_ORDER_URL

class OrderService {

    findAll() {
        return axios.get(`${SERVER_API_URL_ORDERS}`,);
    }

    findBy(id) {
        return axios.get(`${SERVER_API_URL_ORDERS}/${id}`,);
    }

    create(category) {
        return axios.post(`${SERVER_API_URL_ORDERS}`, category);
    }

    update(category) {
        return axios.put(`${SERVER_API_URL_ORDERS}`, category);
    }

    delete(id) {
        return axios.delete(`${SERVER_API_URL_ORDERS}/${id}`,);
    }

}

export default new OrderService;