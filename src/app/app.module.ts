import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { NavComponent } from './nav/nav.component';
import { MoviedataService } from './moviedata.service';
import { PosterComponent } from './poster/poster.component';
import {PosterdataService} from './posterdata.service';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    NavComponent,
    PosterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MoviedataService, PosterdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
