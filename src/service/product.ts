import { ENDPOINTS } from '../constants/endpoints';
import { Product } from '../models/Project';
import api from './api';

export const getAllProducts = async (): Promise<Product[]> =>
  api.get(ENDPOINTS.products).then(res => res.data);
