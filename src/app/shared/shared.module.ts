import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './templates/nav/nav.component';
import { DrawBoardComponent } from './templates/draw-board/draw-board.component';

@NgModule({
  declarations: [NavComponent, DrawBoardComponent],
  imports: [CommonModule],
  exports: [NavComponent,DrawBoardComponent],
})
export class SharedModule {}
