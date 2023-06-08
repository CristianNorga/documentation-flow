import {
  Injectable,
	ElementRef,
	Renderer2,
  RendererFactory2 
} from '@angular/core';

import { optNode, targetMapNodes } from '../../utils/models/draw-flow.model';
import { ComponentsService } from '../../utils/services/components.service';

@Injectable({
  providedIn: 'root'
})
export class RenderContentNode {
  private renderer: Renderer2;
  
  mapNodes: { [key: number]: number } = {};
  // map de connections

  constructor(rendererFactory: RendererFactory2, private _components: ComponentsService) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  
  renderNodeContent(id: number) {
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
      <sc-node-component></sc-node-component>
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

	}
  
  saveKeys(nodeId: number, elementId: number) {
    this.mapNodes[nodeId] = elementId;
  }
  
}
