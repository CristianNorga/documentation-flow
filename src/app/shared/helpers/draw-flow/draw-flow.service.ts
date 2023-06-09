import { Injectable, ViewChild, ElementRef } from '@angular/core';
import Drawflow from 'drawflow';

import { optNode, targetMapNodes } from '../../utils/models/draw-flow.model';
import { ComponentsService } from '../../utils/services/components.service';
import { RenderContentNode } from '../render-content-node/render-content-node.service';

@Injectable({
  providedIn: 'root',
})
export class DrawFlowService {
  @ViewChild('drawflow', { static: true }) drawflow!: ElementRef;
  editor!: Drawflow;
  nodeId: number = 1;

  constructor(
    private componentsService: ComponentsService,
    private renderContentNode: RenderContentNode
  ) {}

  initEditor(element: HTMLElement) {
    this.editor = new Drawflow(element);
    this.editor.reroute = true;
    this.editor.start();

    this.editor.on('nodeCreated', (id) => {
      this.renderContentNode.renderNodeContent(id);
    });

    this.editor.addModule('Main');
    console.log('creating table service');
    // this.createNodesAccordingRoute();
    // this.editor.addConnection(1, 2, 'output_1', 'input_1');
  }

  addNode(id: number, options?: Partial<optNode>) {
    this.renderContentNode.saveKeys(this.nodeId, id);

    let optsDefault: optNode = {
      name: 'default',
      inputs: 0,
      outputs: 1,
      posx: 10,
      posy: 10,
      class: 'classfor',
      data: {},
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

    this.nodeId++;
  }
}
