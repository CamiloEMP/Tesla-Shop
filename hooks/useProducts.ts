import useSWR, { SWRConfiguration } from 'swr'

export const useProduct = <T>(url: string, config: SWRConfiguration = {}) => {
  const { data, error, isLoading } = useSWR<T>(`/api${url}`, config)

  return {
    products: data,
    isLoading,
    isError: error,
  }
}
