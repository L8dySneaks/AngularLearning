import { SuccessAlertComponent } from './testcomponents/success-alert/success-alert.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './features/welcome-screen/welcome-screen.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeDashboardComponent } from './features/home-dashboard/home-dashboard.component';
import { environment } from 'src/environments/environment';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';
import { FormsModule } from '@angular/forms';
import { PlayerCardComponent } from './features/player-card/player-card.component';
import { PlayerComponent } from './features/player/player.component';
import { ParentComponent } from './testcomponents/parent/parent.component';
import { ChildComponent } from './testcomponents/child/child.component';
import { WarningAlertComponent } from './testcomponents/warning-alert/warning-alert.component';
import { MatChipsModule } from '@angular/material/chips';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    HeaderComponent,
    HomeDashboardComponent,
    SideNavComponent,
    PlayerCardComponent,
    PlayerComponent,
    ParentComponent,
    ChildComponent,
    WarningAlertComponent,
    SuccessAlertComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatChipsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
