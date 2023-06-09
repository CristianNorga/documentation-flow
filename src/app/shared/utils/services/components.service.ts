import { Injectable } from '@angular/core';

import { component } from '../models/representation-data.model';

@Injectable({
  providedIn: 'root',
})
export class ComponentsService {
  // private worker!: Worker;
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
  constructor() {
    // if (typeof Worker !== 'undefined') {
    //   this.worker = new Worker(new URL('../../../main.worker', import.meta.url));
    //   this.worker.onmessage = ({ data }) => {
    //     const result = data;

    //     if (result.success) {
    //       console.log(result.message);
    //     } else {
    //       console.error(result.message);
    //     }
    //   };
    // } else {
    //   console.log('Your browser doesn\'t support web workers.');
    // }
  }

  public getData(): component[] {
    // this.worker.postMessage({ operation: 'save', body: '' });
    return this.data;
  }

  public getItem(id: number): component | undefined {
    const item = this.data.find((item) => item.id === id);
    return item;
  }

  public createItem(item: component): void {
    this.data.push(item);
  }

  handleMessage(event: MessageEvent) {

  }
}
