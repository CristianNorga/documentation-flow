import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Drawflow from 'drawflow';

import { addNode } from '../../utils/models/draw-flow.model';
import {
  component,
  flow,
  path,
  typesNodes,
  classNodes,
  inputs,
  outputs
} from '../../utils/models/representation-data.model';

import { ComponentsService } from '../../utils/services/components.service';

@Component({
  selector: 'sc-draw-board',
  templateUrl: './draw-board.component.html',
  styleUrls: ['./draw-board.component.scss'],
})
export class DrawBoardComponent implements AfterViewInit {
  @ViewChild('drawflow', { static: true }) drawflow!: ElementRef;
  editor!: Drawflow;
  data: { components?: component[]; flows?: flow[]; paths?: path[] } = {};
  route: typesNodes = 'components';

  constructor(private _components: ComponentsService) {
    this.data['components'] = this._components.getData();
  }

  ngAfterViewInit() {
    this.editor = new Drawflow(this.drawflow.nativeElement);
    this.editor.reroute = true;
    this.editor.start();
    this.editor.on('nodeCreated', function (id) {
      console.log('Node created ' + id);
    });

    // this.editor.addModule('Main');
    this.createNodesAccordingRoute();

    this.editor.addConnection(1, 2, 'output_1', 'input_1');
  }

  createNodesAccordingRoute() {
    let nodeId: number = 1;
    this.data[this.route]?.forEach((element: component | flow | path) => {
      element.id = nodeId++;
      this.addNode({
        name: element.name,
        posx: element.posx,
        posy: element.posy,
        class: `sc-drawflow ${classNodes[element.type as typesNodes]}`,
        data: JSON.stringify(element),
        inputs: inputs[element.type] | 0,
        outputs: outputs[element.type] | 0,
        html: '<div><h1>Node 1</h1><p>Content</p></div>',
      });
    });
  }

  addNode(options?: Partial<addNode>) {
    let optsDefault: addNode = {
      name: 'default',
      inputs: 0,
      outputs: 1,
      posx: 10,
      posy: 10,
      class: 'classfor',
      data: { title: 'Node 1' },
      html: '<div><h1>Node 1</h1><p>Content</p></div>',
      typenode: false,
    };

    if (options) {
      optsDefault = { ...optsDefault, ...options };
    }

    this.editor.addNode(
      optsDefault.name,
      optsDefault.inputs,
      optsDefault.outputs,
      optsDefault.posx,
      optsDefault.posy,
      optsDefault.class,
      optsDefault.data,
      optsDefault.html,
      optsDefault.typenode
    );
  }
}
