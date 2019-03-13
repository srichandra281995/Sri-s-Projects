import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { VideoComponent } from './video/video.component';
import { YoutubeService } from './common/youtube.service';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { LoadImageComponent } from './loadImage/load-image/load-image.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [AppComponent, SearchComponent, VideoComponent, LoadImageComponent, VideoCardComponent, HomeComponent],
  imports: [BrowserModule, HttpClientModule, CarouselModule.forRoot(), AppRoutingModule],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
