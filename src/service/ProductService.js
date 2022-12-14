import axios , { AxiosRequestConfig, AxiosResponse} from 'axios'

class ProductService {

    async findAll() {
        const config: AxiosRequestConfig = {
            method: 'get',
            url: `/api/v1/product?limit=8&page=0`,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const response: AxiosResponse = await axios(config);
        console.log(response);
        return response;
    }

    findBy(id) {
        return axios.get(`/api/v1/product/${id}`,);
    }

    create(product) {
        return axios.post(`/api/v1/product`, product);
    }

    update(id, product) {
        return axios.put(`/api/v1/product/${id}`, product);
    }

    delete(id) {
        return axios.delete(`/api/v1/product/${id}`,);
    }

}

export default new ProductService;