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

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);

  }

  ngOnInit() {
  }

  onCreatePlayer() {
    this.playerCreationStatus = 'Player was created';
  }

  onUpdatePlayerName(event: any) {
    this.playerName = event.target.value;
 }
}
