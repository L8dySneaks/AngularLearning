import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements OnInit {
  allowNewServer = false;
  playerCreationStatus = 'No player was created';
  playerName = '';
  playerNameTwoWay = 'Test Player Name';
  playerCreated = false;

  username = '';

  constructor() {


    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);

  }

  ngOnInit() {
  }

  resetToEmpty() {
    if (this.username !== '') {
      this.username = '';
    }
  }

  onCreatePlayer() {
    this.playerCreated = true;
    this.playerCreationStatus = 'Player was created. Name of player is: ' + this.playerName;
  }

  onUpdatePlayerName(event: any) {
    this.playerName = event.target.value;
 }

 onUpdatePlayerNameTwoWay(event: any) {
   this.playerNameTwoWay = event.target.value;
 }

 updateUserName(event: any) {

 }
}
