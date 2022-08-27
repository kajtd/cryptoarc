export interface ApiOptions {
  method: unknown;
  url: string;
  params: Params;
  headers: unknown;
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
