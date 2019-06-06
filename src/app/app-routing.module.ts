import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeScreenComponent } from './features/welcome-screen/welcome-screen.component';
import { HomeDashboardComponent } from './features/home-dashboard/home-dashboard.component';

const routes: Routes = [
  { path: '', component: WelcomeScreenComponent },
  { path: 'home-dashboard', component: HomeDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
