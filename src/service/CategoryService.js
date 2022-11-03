import axios , { AxiosRequestConfig, AxiosResponse} from 'axios'

import {header} from './Header';

const SERVER_API_URL_CATEGORIES = process.env.REACT_APP_CATEGORY_URL

const url = SERVER_API_URL_CATEGORIES;

const config = {
    headers: header
};

class CategoryService {

    async findAll() {
        const config: AxiosRequestConfig = {
            method: 'get',
            url: `${SERVER_API_URL_CATEGORIES}`,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const response: AxiosResponse = await axios(config);
        console.log(response);
        return response;
    }

    findBy(id) {
        return axios.get(`${SERVER_API_URL_CATEGORIES}/${id}`,config);
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