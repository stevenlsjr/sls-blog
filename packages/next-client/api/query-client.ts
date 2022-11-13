import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

export function makeQueryClient(){
  return new QueryClient({})
}