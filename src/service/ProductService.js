import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'

const SERVER_API_URL_PRODUCTS = process.env.REACT_APP_PRODUCT_URL

class ProductService {

    async findAll() {
        const config: AxiosRequestConfig = {
            method: 'get',
            url: `${SERVER_API_URL_PRODUCTS}`,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const response: AxiosResponse = await axios(config);
        console.log(response);
        return response;
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