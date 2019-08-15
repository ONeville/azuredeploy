import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// MDB Angular Pro
import { ButtonsModule, WavesModule, CardsModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PAGES } from './pages';

@NgModule({
  declarations: [AppComponent, PAGES],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ButtonsModule,
    WavesModule,
    CardsModule,
    PDFExportModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
