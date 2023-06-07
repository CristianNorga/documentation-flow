import { dataComponent } from './representation-data.model';

export interface optNode {
  name: string;
  inputs: number;
  outputs: number;
  posx: number;
  posy: number;
  class: string;
  data: dataComponent | {};
  html: string;
  typenode: boolean;
}

export type targetMapNodes = { [key: number]: number };
