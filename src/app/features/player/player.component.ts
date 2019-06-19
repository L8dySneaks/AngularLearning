import {
  Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, ContentChild,
  AfterContentInit, ContentChildren
} from '@angular/core';
import { PlayerCardComponent } from '../player-card/player-card.component';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, AfterViewInit, AfterContentInit {

  @ViewChild(PlayerCardComponent) firstPlayerCardComponent: PlayerCardComponent;
  @ViewChildren(PlayerCardComponent) allPlayerCardComponent: QueryList<PlayerCardComponent>;

  @ContentChild(PlayerCardComponent) firstProjectedPlayerCardComponent: PlayerCardComponent;
  @ContentChild('tempPlayer') tempPlayerCardComponent: PlayerCardComponent;
  @ContentChildren(PlayerCardComponent) allProjectedPlayerCardComponents: QueryList<PlayerCardComponent>;

  players: string[] = [
    'Steph',
    'Kacey',
    'John',
    'Jenn',
    'Will',
    'Cole'
  ];

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.firstPlayerCardComponent.player = 'This was changed from the player component afterViewInit';
    this.allPlayerCardComponent.toArray().forEach(player => {
      player.player = 'This was changed from the player component afterViewInit';
    });
  }

  ngAfterContentInit() {
    // Called after ngOnInit when the component's or directive's content has been initialized.
    // Add 'implements AfterContentInit' to the class.

    // this.firstProjectedPlayerCardComponent.player = 'This is the first projected player card';

    // this.allProjectedPlayerCardComponents.toArray().forEach(player => {
    //   player.player = 'This was changed after content Init Method';
    // });

    this.tempPlayerCardComponent.player = 'This is using a template variable';
  }
}
