import axios from 'axios';
import { baseUrl } from '../constants/config';

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
