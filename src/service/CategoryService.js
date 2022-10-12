import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL
const SERVER_API_URL_CATEGORIES = API_URL + process.env.REACT_APP_CATEGORY_URL

class CategoryService {

    findAll() {
        return axios.get(`${SERVER_API_URL_CATEGORIES}`,);
    }

    findBy(id) {
        return axios.get(`${SERVER_API_URL_CATEGORIES}/${id}`,);
    }

    create(category) {
        return axios.post(`${SERVER_API_URL_CATEGORIES}`, category);
    }

    update(category) {
        return axios.put(`${SERVER_API_URL_CATEGORIES}`, category);
    }

    delete(id) {
        return axios.delete(`${SERVER_API_URL_CATEGORIES}/${id}`,);
    }

}

export default new CategoryService;