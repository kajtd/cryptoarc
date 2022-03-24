interface ApiOptions = {
  method: string,
  url: string,
  params: object,
  headers: {
    'x-bingapis-sdk'?: string,
    'x-rapidapi-host': string,
    'x-rapidapi-key': string,
  },
};

export default ApiOptions;