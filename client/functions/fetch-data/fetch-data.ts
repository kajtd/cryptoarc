import axios, { AxiosRequestConfig } from 'axios';

interface FetchEvent extends Event {
  queryStringParameters: {
    data: string;
  };
}

const handler = async (event: FetchEvent) => {
  const { data } = event.queryStringParameters;

  const newsOptions: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news/search?q=Cryptocurrency&count=5&setLang=EN',
    params: { safeSearch: 'Off', textFormat: 'Raw' },
    headers: {
      'x-bingapis-sdk': 'true',
      'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
      'x-rapidapi-key': process.env.VUE_APP_API_KEY,
    },
  };

  const coinsOptions: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      tiers: '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0',
    },
    headers: {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': process.env.VUE_APP_API_KEY,
    },
  };

  const apiOptions = data === 'news' ? newsOptions : coinsOptions;

  try {
    const { data } = await axios.request(apiOptions);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    const { status, statusText, headers, data } = error.message;
    return {
      statusCode: 404,
      body: JSON.stringify({ status, statusText, headers, data }),
    };
  }
};

module.exports = { handler };
