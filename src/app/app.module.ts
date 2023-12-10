import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PropertyComponent } from './components/property/property.component';
import { PropertyCardComponent } from './components/property-card/property-card.component';
import { TagComponent } from './components/tag/tag.component';
import { PropertyInfoComponent } from './components/property-info/property-info.component';
import { HrComponent } from './components/hr/hr.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    NavbarComponent,
    PropertyComponent,
    PropertyCardComponent,
    TagComponent,
    PropertyInfoComponent,
    HrComponent,
    FooterComponent,
    LoaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
