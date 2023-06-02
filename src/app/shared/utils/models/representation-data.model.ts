
export type typesNodes = 'components' | 'flows' | 'paths';

export type typeComponent = 'backend' | 'frontend' | 'database' | 'service';

export enum classNodes {
  'components' = 'sc-drawflow--components',
  'flows' = 'sc-drawflow--flows',
  'paths' = 'sc-drawflow--paths',
}

export enum inputs {
  'backend' = 2,
  'frontend' = 0,
  'database' = 1,
  'service' = 2,
}

export enum outputs {
  'backend' = 1,
  'frontend' = 1,
  'database' = 0,
  'service' = 1,
}

export interface component {
  id: number;
  name: string;
  description: string;
  category: string;
  posx: number;
  posy: number;
  type: typeComponent;
  // inputs: number;
  // outputs: number;
}

export interface flow extends component {

}
export interface path extends component {}
