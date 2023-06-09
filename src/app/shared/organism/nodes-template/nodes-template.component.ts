import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import {
  component,
  flow,
  path,
  typesNodes,
  classNodes,
  inputs,
  outputs,
  typeComponent,
} from '../../utils/models/representation-data.model';
import { DrawFlowService } from '../../helpers/draw-flow/draw-flow.service';
import { ComponentsService } from '../../utils/services/components.service';

@Component({
  selector: 'sc-nodes-template',
  templateUrl: './nodes-template.component.html',
  styleUrls: ['./nodes-template.component.scss'],
})
export class NodesTemplateComponent implements OnInit {
  typeNode = new FormControl('');
  isValid: boolean = false;
  lastFormData: any;
  nodeData!: Partial<component | flow | path>;

  constructor(
    private drawFlowService: DrawFlowService,
    private _components: ComponentsService
  ) {}

  ngOnInit() {
    this.typeNode.valueChanges.subscribe((type) => {
      switch (type) {
        case 'paths':
          console.log(type);
          break;
        case 'flows':
          console.log(type);
          break;
        case 'components':
        default:
          this.nodeData = {
            id: 0,
            type: 'components',
            category: 'backend',
            posx: 30,
            posy: 30,
            data: {
              name: '',
              framework: '',
              hosting: '',
            },
          };
          break;
      }
    });
  }
  createNode() {
    console.log('createNode: ');
    // element: component | flow | path

    this.nodeData.id = new Date().getTime();

    let isContinuousDeployment = true;
    Object.keys(this.lastFormData.continuousDeployment).forEach((key) => {
      this.lastFormData[key] = this.lastFormData.continuousDeployment[key];
      if(this.lastFormData.continuousDeployment[key] === false) isContinuousDeployment = false;
    });
    this.lastFormData.continuousDeployment = isContinuousDeployment;

    this.nodeData.data = this.lastFormData;

    this._components.createItem(this.nodeData as component);

    this.drawFlowService.addNode(this.nodeData.id, {
      name: this.nodeData.data?.name,
      posx: this.nodeData.posx,
      posy: this.nodeData.posy,
      class: `sc-drawflow ${classNodes[this.nodeData.type as typesNodes]}`,
      // data: JSON.stringify(this.nodeData), //not necessary
      inputs: inputs[this.nodeData.category as typeComponent] | 0,
      outputs: outputs[this.nodeData.category as typeComponent] | 0,
      html: '',
    });
  }
  enableButton(event: Event) {
    this.lastFormData = event;
    this.isValid = true;
  }
}
