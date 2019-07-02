import { ChildComponent } from './../child/child.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  constructor() { }
  serverId = 10;
  serverStatus = 'offline';

  // @ViewChild(ChildComponent) child: ChildComponent;
  counter: number;

  getServerStatus() {
    return this.serverStatus;
  }

  onCounterChanged($event) {
    this.counter = $event;
  }


}
