import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatModule } from './appModules/mat.module';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { UtilitiesComponent } from './includes/utilities/utilities.component';
import { PopupsComponent } from './includes/utilities/popups/popups.component';
import { PagesComponent } from './pages/pages.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UtilitiesComponent,
    PopupsComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
