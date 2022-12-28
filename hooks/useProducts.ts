import useSWR, { SWRConfiguration } from 'swr'

import { Product } from 'interfaces/products'

export const useProduct = (url: string, config: SWRConfiguration = {}) => {
  const { data, error, isLoading } = useSWR<Product[]>(`/api${url}`, config)

  return {
    products: data ?? [],
    isLoading,
    isError: error,
  }
}
