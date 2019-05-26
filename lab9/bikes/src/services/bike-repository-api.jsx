import Axios from 'axios';

const API_URL = 'localhost:4000/api'

export class BikeRepository {

    async add(newBike) {
        const res = await Axios
            .post(`${API_URL}/bike`, newBike);
        return res.data;
    }

    async getById(id) {
        const res = await Axios
            .get(`${API_URL}/bike/${id}`);
        return res.data;
    }

    async getAll() {
        const res = await Axios
            .get(`${API_URL}/bike`);
        return res.data;
    }

    async update(id, newBike) {
        const res = await Axios
            .put(`${API_URL}/bike/${id}`, newBike);
        return res.data;
    }

    async delete(id) {
        const res = await Axios
            .delete(`${API_URL}/bike/${id}`);
        return res.data;
    }

}
