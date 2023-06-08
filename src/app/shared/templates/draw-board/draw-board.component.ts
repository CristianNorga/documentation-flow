import {
	Component,
	AfterViewInit,
	ViewChild,
	ElementRef,
} from '@angular/core';
import Drawflow from 'drawflow';
import { optNode, targetMapNodes } from '../../utils/models/draw-flow.model';
import {
	component,
	flow,
	path,
	typesNodes,
	classNodes,
	inputs,
	outputs,
} from '../../utils/models/representation-data.model';

import { ComponentsService } from '../../utils/services/components.service';
import { RenderContentNode } from '../../helpers/render-content-node/render-content-node.service';
import { DrawFlowService } from '../../helpers/draw-flow/draw-flow.service'

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

	constructor(
		private _components: ComponentsService,
    private renderContentNode: RenderContentNode,
    private drawFlowService: DrawFlowService
	) {
		this.data['components'] = this._components.getData();
	}

	ngAfterViewInit() {
    this.drawFlowService.initEditor(this.drawflow.nativeElement)
    // this.createNodesAccordingRoute()
    
		// this.editor = new Drawflow(this.drawflow.nativeElement);
		// this.editor.reroute = true;
		// this.editor.start();

		// this.editor.on('nodeCreated', (id) => {
    //   this.renderContentNode.renderNodeContent(id)
		// });

		// this.editor.addModule('Main');
		// this.createNodesAccordingRoute();

		// this.editor.addConnection(1, 2, 'output_1', 'input_1');
	}

	createNodesAccordingRoute() {
		let nodeId: number = 1;
		this.data[this.route]?.forEach((element: component | flow | path) => {
      
      this.renderContentNode.saveKeys(nodeId, element.id)
			nodeId++;
			this.drawFlowService.addNode({
				name: element.data.name,
				posx: element.posx,
				posy: element.posy,
				class: `sc-drawflow ${classNodes[element.type as typesNodes]}`,
				// data: JSON.stringify(element), //not necessary
				inputs: inputs[element.category] | 0,
				outputs: outputs[element.category] | 0,
				html: '',
			});
		});
	}

	addNode(options?: Partial<optNode>) {
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
	}
}
