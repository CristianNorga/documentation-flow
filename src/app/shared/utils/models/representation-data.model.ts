
// GENERAL
export type typesNodes = 'components' | 'flows' | 'paths';

export enum classNodes {
  'components' = 'sc-drawflow--components',
  'flows' = 'sc-drawflow--flows',
  'paths' = 'sc-drawflow--paths',
}

// COMPONENTE
export type typeComponent = 'backend' | 'frontend' | 'database' | 'service';

export interface component {
  id: number;
  type: typesNodes;
  category: typeComponent;
  posx: number;
  posy: number;
  data: dataComponent;
  // inputs: number;
  // outputs: number;
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

export interface dataComponent {
  name: string;
  framework: string;
  hosting: string;
  version: string;
  repository: string;
  continuousDeployment: boolean;
  automatedDeliveryProcess: boolean;
  frequentDeliveries: boolean;
  automatedTesting: boolean;
  versionControl: boolean;
  monitoring: boolean;
  lastDeploy: string;
  unitTesting: number;
  wiki: string;
}

// FLUJO
export interface flow extends component {}

// RUTA
export interface path extends component {}
