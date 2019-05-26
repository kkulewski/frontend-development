import Axios from 'axios';

const API_URL = 'http://localhost:4000/api'

export class BikeRepository {

    async add(newBike) {
        return await Axios.post(`${API_URL}/bike`, newBike).then(res => res.data);
    }

    async getById(id) {
        return await Axios.get(`${API_URL}/bike/${id}`).then(res => res.data);
    }

    async getAll() {
        return await Axios.get(`${API_URL}/bike`).then(res => res.data);
    }

    async update(id, newBike) {
        return await Axios.put(`${API_URL}/bike/${id}`, newBike).then(res => res.data);
    }

    async delete(id) {
        return await Axios.delete(`${API_URL}/bike/${id}`).then(res => res.data);
    }

}
