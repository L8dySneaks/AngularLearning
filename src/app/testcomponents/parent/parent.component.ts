import { ChildComponent } from './../child/child.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  // @ViewChild(ChildComponent) child: ChildComponent;
  counter: number;

  onCounterChanged($event) {
    this.counter = $event;
  }

  constructor() { }


}
