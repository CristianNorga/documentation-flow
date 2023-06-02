import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './templates/nav/nav.component';
import { DrawBoardComponent } from './templates/draw-board/draw-board.component';
import { SideToolsComponent } from './templates/side-tools/side-tools.component';

@NgModule({
  declarations: [NavComponent, DrawBoardComponent, SideToolsComponent],
  imports: [CommonModule],
  exports: [NavComponent, DrawBoardComponent, SideToolsComponent],
})
export class SharedModule {}
