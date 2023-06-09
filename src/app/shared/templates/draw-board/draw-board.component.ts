import {
	Component,
	AfterViewInit,
	ViewChild,
	ElementRef,
} from '@angular/core';
import Drawflow from 'drawflow';
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
    private drawFlowService: DrawFlowService
	) {
		this.data['components'] = this._components.getData();
	}

	ngAfterViewInit() {
    this.drawFlowService.initEditor(this.drawflow.nativeElement)
		this.createNodesAccordingRoute();

		// this.editor.addConnection(1, 2, 'output_1', 'input_1');
	}

	createNodesAccordingRoute() {
		this.data[this.route]?.forEach((element: component | flow | path) => {

			this.drawFlowService.addNode(element.id, {
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


}
