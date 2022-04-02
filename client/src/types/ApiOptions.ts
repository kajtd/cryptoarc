export interface ApiOptions {
  method: any;
  url: string;
  params: Params;
  headers: any;
}

export interface Params {
  referenceCurrencyUuid?: string;
  timePeriod?: string;
  tiers?: string;
  orderBy?: string;
  orderDirection?: string;
  limit?: string;
  offset?: string;
  safeSearch?: string;
  textFormat?: string;
}
