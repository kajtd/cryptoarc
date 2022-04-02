import axios from 'axios';
import { ApiOptions } from '@/types/ApiOptions';
import { ServerResponse } from '@/types/ServerResponse';

const fetchData = async (options: ApiOptions): Promise<ServerResponse> => {
  const { data: response } = await axios.request(options);
  return response;
};

export default fetchData;
