// Generated by https://quicktype.io

export interface News {
  _type: string;
  name: string;
  url: string;
  image: NewsImage;
  description: string;
  about?: About[];
  provider: Provider[];
  datePublished: string;
  mentions?: Mention[];
}

export interface About {
  _type: string;
  readLink: string;
  name: string;
}

export interface NewsImage {
  _type: string;
  thumbnail: PurpleThumbnail;
}

export interface PurpleThumbnail {
  _type: string;
  contentUrl: string;
  width: number;
  height: number;
}

export interface Mention {
  _type: string;
  name: string;
}

export interface Provider {
  _type: string;
  name: string;
  image: ProviderImage;
}

export interface ProviderImage {
  _type: string;
  thumbnail: FluffyThumbnail;
}

export interface FluffyThumbnail {
  _type: string;
  contentUrl: string;
}