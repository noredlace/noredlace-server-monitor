import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServerCardComponent } from './server-card/server-card.component';
import { AboutComponent } from './routing/about/about.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';

import { ApiJokeService } from './api-service/api-joke/api-joke.service';
import { ApiGameServersService } from './api-service/api-gameservers/api-gameservers.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServerCardComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [ApiJokeService, ApiGameServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
