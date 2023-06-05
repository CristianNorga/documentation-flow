import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './templates/nav/nav.component';
import { DrawBoardComponent } from './templates/draw-board/draw-board.component';
import { SideToolsComponent } from './templates/side-tools/side-tools.component';
import { NodesToolsComponent } from './organism/nodes-tools/nodes-tools.component';
import { CardDownComponent } from './molecules/card-down/card-down.component';

@NgModule({
  declarations: [
    NavComponent,
    DrawBoardComponent,
    SideToolsComponent,
    NodesToolsComponent,
    CardDownComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavComponent,
    DrawBoardComponent,
    SideToolsComponent,
  ],
})
export class SharedModule {}
