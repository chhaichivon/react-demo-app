import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL
const SERVER_API_URL_PRODUCTS = API_URL + process.env.REACT_APP_PRODUCT_URL

class ProductService {

    findAll() {
        return axios.get(`${SERVER_API_URL_PRODUCTS}`,);
    }

    findBy(id) {
        return axios.get(`${SERVER_API_URL_PRODUCTS}/${id}`,);
    }

    create(category) {
        return axios.post(`${SERVER_API_URL_PRODUCTS}`, category);
    }

    update(category) {
        return axios.put(`${SERVER_API_URL_PRODUCTS}`, category);
    }

    delete(id) {
        return axios.delete(`${SERVER_API_URL_PRODUCTS}/${id}`,);
    }

}

export default new ProductService;