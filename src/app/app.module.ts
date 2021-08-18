import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CarouselModule } from 'ngx-owl-carousel-o';

// import { SlickCarouselModule } from '../../node_modules/ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderOneComponent } from './header-one/header-one.component';
import { FirstNavbarComponent } from './first-navbar/first-navbar.component';
import { SecondNavbarComponent } from './second-navbar/second-navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderOneComponent,
    FirstNavbarComponent,
    SecondNavbarComponent,
    HomePageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    CarouselModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
