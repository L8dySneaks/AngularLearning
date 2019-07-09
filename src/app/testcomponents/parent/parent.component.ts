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
  showSecret = false;
  log = [];

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

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

  // toggleParagraph() {
  //   return this.toggleP === 'show' ? 'block' : 'none';
  // }



}
