import axios , { AxiosRequestConfig, AxiosResponse} from 'axios'

class OrderService {

    findAll() {
        return axios.get(`/api/v1/order`,);
    }

    findBy(id) {
        return axios.get(`/api/v1/order/${id}`,);
    }

    create(order) {
        return axios.post(`/api/v1/order`, order);
    }

    update(id, order) {
        return axios.put(`/api/v1/order/${id}`, order);
    }

    delete(id) {
        return axios.delete(`/api/v1/order/${id}`,);
    }

}

export default new OrderService;