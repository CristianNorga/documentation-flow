import { Injectable } from '@angular/core';

import { component } from '../models/representation-data.model';

@Injectable({
  providedIn: 'root',
})
export class ComponentsService {
  private data: component[] = [
    {
      id: 1686063478328,
      type: 'components',
      category: 'backend',
      posx: 30,
      posy: 30,
      data: {
        name: 'nameTest',
        framework: 'frameworkTest',
        hosting: 'hostingTest',
        version: 'versionTest',
        repository: 'repositoryTest',
        continuousDeployment: false,
        automatedDeliveryProcess: true,
        frequentDeliveries: true,
        automatedTesting: false,
        versionControl: true,
        monitoring: false,
        lastDeploy: '01/02/2020',
        unitTesting: 68.85,
        wiki: 'wikiTest',
      },
    },
    {
      id: 1686063585958,
      type: 'components',
      category: 'backend',
      posx: 30,
      posy: 30,
      data: {
        name: 'nameTest2',
        framework: 'frameworkTest2',
        hosting: 'hostingTest2',
        version: 'versionTest2',
        repository: 'repositoryTest2',
        continuousDeployment: false,
        automatedDeliveryProcess: true,
        frequentDeliveries: true,
        automatedTesting: false,
        versionControl: true,
        monitoring: false,
        lastDeploy: '01/02/2020',
        unitTesting: 68.85,
        wiki: 'wikiTest2',
      },
    },
  ];
  constructor() {}

  public getData(): component[] {
    return this.data;
  }

  public getItem(id: number): component | undefined {
    const item = this.data.find((item) => item.id === id);
    return item;
  }
}
