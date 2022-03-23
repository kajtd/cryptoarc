import axios from 'axios';

const fetchData = async (options) => {
  try {
    const { data: response } = await axios.request(options);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
