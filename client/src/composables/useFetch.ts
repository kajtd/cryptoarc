import axios from 'axios';
import ApiOptions from '@/types/ApiOptions';

const fetchData = async (options: ApiOptions) => {
  try {
    const { data: response } = await axios.request(options);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
