import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import {
	component,
  flow,
  path,
	typesNodes,
} from '../../utils/models/representation-data.model';

@Component({
	selector: 'sc-nodes-template',
	templateUrl: './nodes-template.component.html',
	styleUrls: ['./nodes-template.component.scss'],
})

export class NodesTemplateComponent implements OnInit {
	typeNode = new FormControl('');
	isValid: boolean = false;
  lastFormData: any;
  nodeData!: component | flow | path;

	constructor() {}

	ngOnInit() {
		this.typeNode.valueChanges.subscribe((type) => {
			switch (type) {
				case 'paths':
          // nodeData = {
            
          // }
					break;
				case 'flows':
          console.log(type);
					break;
				case 'components':
				default:
          console.log(type);
					break;
			}
		});
	}
	createNode() {
		//create node
	}
	enableButton(event: Event) {
		console.log('createNode: ');
		this.isValid = true;
	}
}
