import { Component } from '@angular/core';

@Component({
  selector: 'sc-side-tools',
  templateUrl: './side-tools.component.html',
  styleUrls: ['./side-tools.component.scss'],
})
export class SideToolsComponent {
  toolActived: string = 'filter';
  constructor() {}

  changeTool(toolToActive: string){
    console.log('change tool ', toolToActive);
    this.toolActived = toolToActive;
  };
}
