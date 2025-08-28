import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { Product } from '../models/Project';
import { QUERY_KEYS } from '../constants/queryKeys';
import { getAllProducts } from '../service/product';

export type Options = Omit<UseQueryOptions<Product[]>, 'queryKey' | 'queryFn'>;

const useGetProductsQuery = (options?: Options) => {
  return useQuery({
    queryKey: [QUERY_KEYS.products],
    queryFn: getAllProducts,
    ...options,
  });
};

export default useGetProductsQuery;
