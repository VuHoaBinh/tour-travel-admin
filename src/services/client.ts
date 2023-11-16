import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 20 * 1000,
      refetchOnMount: 'always',
      gcTime: 20 * 1000,
    },
  },
});
const queryService = queryClient;
export default queryService;
