import axios from "axios";

const BASE_URL = "https://server-intercorp-test.onrender.com";
// const BASE_URL = "http://localhost:3000";


const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})


export const getClients = async () => {
    const result = await api.get('/list');
    const data = result.data;
    return data;
}

export const getOneClient = async (id: string) => {
    const result = await api.get(`/list/${id}`);
    const data = result.data;
    return data;
}

export const getEstandartDesviation = async () => {
    const result = await api.get('/clientsKpi');
    const data = result.data;
    console.log(data);
    return data;
}

export const createClient = async (formData: any) => {
    const result = await api.post('/', {
        ...formData
    });
    const data = result.data;
    console.log(data);
    return data;
}

