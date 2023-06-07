import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NavComponent } from './templates/nav/nav.component';
import { DrawBoardComponent } from './templates/draw-board/draw-board.component';
import { SideToolsComponent } from './templates/side-tools/side-tools.component';
import { NodesToolsComponent } from './organism/nodes-tools/nodes-tools.component';
import { CardDownComponent } from './molecules/card-down/card-down.component';
import { NodesTemplateComponent } from './organism/nodes-template/nodes-template.component';
import { NodeComponentComponent } from './molecules/node-component/node-component.component';
import { FormNodeComponentComponent } from './molecules/form-node-component/form-node-component.component';

@NgModule({
  declarations: [
    NavComponent,
    DrawBoardComponent,
    SideToolsComponent,
    NodesToolsComponent,
    CardDownComponent,
    NodesTemplateComponent,
    NodeComponentComponent,
    FormNodeComponentComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [NavComponent, DrawBoardComponent, SideToolsComponent],
})
export class SharedModule {}
