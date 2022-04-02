import { News } from '@/types/News';
import Coin from '@/types/Coin';

export interface ServerResponse {
  value: News[];
  data: ServerData;
}

export interface ServerData {
  coins: Coin[];
}
