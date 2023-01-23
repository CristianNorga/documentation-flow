import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Drawflow from 'drawflow';

import { addNode } from '../../utils/models/draw-flow.model';
import { component } from '../../utils/models/representation-data.model';

import { ComponentsService } from '../../utils/services/components.service';

@Component({
  selector: 'app-draw-board',
  templateUrl: './draw-board.component.html',
  styleUrls: ['./draw-board.component.css'],
})
export class DrawBoardComponent implements AfterViewInit {
  @ViewChild('drawflow', { static: true }) drawflow!: ElementRef;
  editor!: Drawflow;
  data: { components?: component[], other?: any[] } = {};

  constructor(private _components: ComponentsService) {
    this.data['components'] = this._components.getData();
  }

  ngAfterViewInit() {
    this.editor = new Drawflow(this.drawflow.nativeElement);
    this.editor.reroute = true;
    this.editor.start();

    // this.editor.addModule('Main');
    
    this.addNode({
      name: 'foo',
      posx: 10,
      posy: 10,
      class: 'sc-drawflow-component',
      data: { category: 'Node_1', id: 1 },
      html: '<div><h1>Node 1</h1><p>Content</p></div>',
    });
    this.addNode({
      name: 'bar',
      inputs: 1,
      posx: 30,
      posy: 30,
      class: 'classbar',
      data: { title: 'Node 2' },
      html: '<div><h1>Node 2</h1><p>Content</p></div>',
    });

    this.editor.addConnection(1, 2, 'output_1', 'input_1');
    // this.editor.addConnection(1, 3, 'output_1', 'input_1');
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
