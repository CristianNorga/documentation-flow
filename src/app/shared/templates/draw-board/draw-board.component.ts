import {
	Component,
	AfterViewInit,
	ViewChild,
	ElementRef,
	Renderer2,
	OnInit,
	VERSION,
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
	mapNodes: { [key: number]: number } = {};

	constructor(
		private _components: ComponentsService,
		private renderer: Renderer2
	) {
		this.data['components'] = this._components.getData();
	}

	ngAfterViewInit() {
		this.editor = new Drawflow(this.drawflow.nativeElement);
		this.editor.reroute = true;
		this.editor.start();

		this.editor.on('nodeCreated', (id) => {
			this.renderNode(id);
		});

		this.editor.addModule('Main');
		this.createNodesAccordingRoute();

		this.editor.addConnection(1, 2, 'output_1', 'input_1');
	}

	createNodesAccordingRoute() {
		let nodeId: number = 1;
		this.data[this.route]?.forEach((element: component | flow | path) => {
			this.mapNodes[nodeId] = element.id;
			nodeId++;
			this.addNode({
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

	renderNode(id: number) {
		let node_content = document.getElementById('node-' + id)?.children[1];
		let component = this._components.getItem(this.mapNodes[id]);
		let data;

		const bolToIcon = (bol: boolean): string => {
			return bol ? '✔' : '❌';
		};

		if (component) {
			data = component.data;
			let deploymentArray: boolean[] = [];
			deploymentArray.push(data.automatedDeliveryProcess);
			deploymentArray.push(data.frequentDeliveries);
			deploymentArray.push(data.automatedTesting);
			deploymentArray.push(data.versionControl);
			deploymentArray.push(data.monitoring);

			let aprovedQuantyDeployment = deploymentArray.filter((element) => !!element);

			let timeHuman = data.lastDeploy;

			let container = this.renderer.createElement('div');
			this.renderer.addClass(container, 'sc-node-card');
			this.renderer.addClass(container, 'card');
			let html = `

			<div class="sc-node-card__header card-header d-flex justify-content-between">
				<div class="sc-node-card__icon d-flex justify-content-center aligns-items-center">
					<h6 class="align-self-center m-0">${data.framework[0]}</h6>
				</div>
				<div class="sc-node-card__ctn-title ms-2 d-flex flex-column">
					<h6 class="mb-0">${data.name}</h6> <span>${data.hosting}</span>
				</div>
				<div class="align-self-center">
				  <div class="badge bg-success"> <span>${data.version}</span> </div>
				</div>
			</div>

			<div class="sc-node-card__ctn-body card-body">
				<div class="sc-node-card__item">
					<span class="fw-bold">Framework: </span> <span>${data.framework}</span>
				</div>
				<div class="sc-node-card__item">
					<h6 class="fw-bold">Links: </h6>
					<ul class="list-unstyled">
						<li>
							<a class="link-opacity-75-hover" href="${data.wiki}">wiki</a>
						</li>
						<li>
							<a class="link-opacity-75-hover" href="${data.repository}">repository</a>
						</li>
					</ul>
				</div>
				<div class="sc-node-card__item">
					<h6 class="fw-bold">
					continuous Deployment: ${bolToIcon(data.continuousDeployment)}</h6>
					<div>
						<span>
							${aprovedQuantyDeployment.length} Applied 
							<span class="opacity-75">
								of ${deploymentArray.length}
							</span>
						</span> 
					</div>
					<ul class="list-unstyled">
						<li>
							<span class="opacity-75">automated Delivery Process: </span>
							<span>${bolToIcon(data.automatedDeliveryProcess)}</span>
						</li>
						<li>
							<span class="opacity-75">frequent Deliveries: </span>
							<span>${bolToIcon(data.frequentDeliveries)}</span>
						</li>
						<li>
							<span class="opacity-75">automated Testing: </span>
							<span>${bolToIcon(data.automatedTesting)}</span>
						</li>
						<li>
							<span class="opacity-75">version Control: </span>
							<span>${bolToIcon(data.versionControl)}</span>
						</li>
						<li>
							<span class="opacity-75">monitoring: </span>
							<span>${bolToIcon(data.monitoring)}</span>
						</li>
					</ul>
				</div>

				<div class="sc-node-card__item">
					<h6 class="fw-bold">unit testing: </h6>
					<div class="media d-flex">
						<div class="media-body text-left">
							<h3 class="success">${data.unitTesting} %</h3>
							<span>Coverage</span>
						</div>
						<div class="align-self-center">
							<i class="icon-cup success font-large-2 float-right"></i>
						</div>
					</div>
					<div class="progress mt-1 mb-0" style="height: 7px;">
						<div 
						class="progress-bar 
						bg-success" 
						role="progressbar" 
						style="width: ${data.unitTesting}%" 
						aria-valuenow="${data.unitTesting}" 
						aria-valuemin="0" 
						aria-valuemax="100">
						</div>
					</div>
				</div>

				<div class="sc-node-card__item">
					<blockquote class="blockquote mb-0">
						<footer class="blockquote-footer m-0">last deploy <cite title="${timeHuman}">${timeHuman}</cite></footer>
					</blockquote>
				</div>
			</div>
			
			`;

			container.innerHTML = html;

			this.renderer.appendChild(node_content, container);
		}

		// {
		//   id: 1686063478328,
		//   type: 'components',
		//   category: 'backend',
		//   posx: 30,
		//   posy: 30,
		//   data: {
		//     name: 'nameTest', =========>ok
		//     framework: 'frameworkTest', =========>ok
		//     hosting: 'hostingTest', =========>ok
		//     version: 'versionTest', =========>ok
		//     repository: 'repositoryTest', =========>ok
		//     continuousDeployment: false, =========>ok
		//     automatedDeliveryProcess: true, =========>ok
		//     frequentDeliveries: true, =========>ok
		//     automatedTesting: false, =========>ok
		//     versionControl: true, =========>ok
		//     monitoring: false, =========>ok
		//     lastDeploy: '01/02/2020',
		//     unitTesting: porcentage, =========>ok
		//     wiki: 'wikiTest', =========>ok
		//   }
		// },
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
