import useSwr from 'swr'
import fetcher from 'lib/fetcher';

const useBillboard = () => {
  const { data, error, isLoading } = useSwr('/api/randomMovie', fetcher, { 
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
   });
  return {
    data,
    error,
    isLoading
  }
};

export default useBillboard;
