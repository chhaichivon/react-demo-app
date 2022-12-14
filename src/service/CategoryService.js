import axios , { AxiosRequestConfig, AxiosResponse} from 'axios'

import {header} from './Header';

const config = {
    headers: header
};

class CategoryService {

    async findAll() {
        const config: AxiosRequestConfig = {
            method: 'get',
            url: `/api/v1/category`,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const response: AxiosResponse = await axios(config);
        console.log(response);
        return response;
    }

    findBy(id) {
        return axios.get(`/api/v1/category/${id}`,config);
    }

    create(category) {
        return axios.post(`/api/v1/category`, category);
    }

    update(id, category) {
        return axios.put(`/api/v1/category${id}`, category);
    }

    delete(id) {
        return axios.delete(`/api/v1/category/${id}`,);
    }

}

export default new CategoryService;