import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sc-nodes-template',
  templateUrl: './nodes-template.component.html',
  styleUrls: ['./nodes-template.component.scss'],
})
export class NodesTemplateComponent implements OnInit {
  typeNode = new FormControl('');
  isValid: boolean = false;

  constructor() {}

  ngOnInit() {
    // this.formSelected.value .valueChanges.subscribe((value) => {
    //   if (value === 'typeNode') {
    //     this.isValid = false;
    //   } else {
    //     this.isValid = true;
    //   }
    // });
  }
  createNode(event: Event){
    console.log('createNode: ', event);
  };
}
