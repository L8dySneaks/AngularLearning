import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  count = 0;
  @Output() counterChanged: EventEmitter<number> = new EventEmitter<number>();

  onIncrement() {
    this.counterChanged.emit(++this.count);
  }

  onDecrement() {
    this.counterChanged.emit(--this.count);
  }

  constructor() { }

  ngOnInit() {
  }

}
