import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'sc-card-down',
  templateUrl: './card-down.component.html',
  styleUrls: ['./card-down.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '*',
        }),
      ),
      state(
        'closed',
        style({
          height: '0',
        })
      ),
      transition('open <=> closed', [animate('0.3s ease-in-out')]),
    ]),
  ],
})
export class CardDownComponent
{
  @Input() title: string = 'Default title';

  isOpen: boolean = false;
  heightExp: string = 'auto';
  heightBody: string = '0';

  constructor() {}

  toggle() {
    this.isOpen = !this.isOpen;
    this.heightExp = this.isOpen ? this.heightBody+'px' : '0px';
  }
}
