import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './routing/about/about.component';
import { ServerCardComponent } from './server-card/server-card.component';


const routes: Routes = [
  { path: '', component: ServerCardComponent},
  { path: 'home', component: ServerCardComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
