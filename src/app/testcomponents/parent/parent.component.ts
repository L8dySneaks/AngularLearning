import { ChildComponent } from './../child/child.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  serverId = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';

  }
  // @ViewChild(ChildComponent) child: ChildComponent;
  counter: number;

  getServerStatus() {
    return this.serverStatus;
  }

  onCounterChanged($event) {
    this.counter = $event;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }


}
