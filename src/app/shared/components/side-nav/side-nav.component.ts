import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  interpolatedString = 'This is the string that is getting displayed by interpolation';

  propertyBindedString = 'This is the string that is getting displayed by property binding';

  bindedTwoWays = 'This is binded two ways';

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    alert('The button was clicked');
  }

}
