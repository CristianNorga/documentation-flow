import { Injectable } from '@angular/core';

import { component } from '../models/representation-data.model';

@Injectable({
  providedIn: 'root',
})
export class ComponentsService {
  private data: component[] = [
    {
      id: 1,
      name: 'component a',
      description: 'Content',
      category: 'Node_1',
    },
    {
      id: 2,
      name: 'component b',
      description: 'Content',
      category: 'Node_1',
    },
  ];
  constructor() {}

  public getData(): component[] {
    return this.data;
  }
}
