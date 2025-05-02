
// src/api/httpClient.ts
import axios from 'axios';

const BASE_URL =  'http://localhost:8080/api';

const httpClient = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' },
});

export default httpClient;
