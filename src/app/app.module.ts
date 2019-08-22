import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule, CardsFreeModule } from 'angular-bootstrap-md';
// MDB Angular Pro
import { ButtonsModule, WavesModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PAGES } from './pages';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShowCodeComponent } from './shared/components/show-code/show-code.component';

@NgModule({
  declarations: [AppComponent, PAGES, ShowCodeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    ButtonsModule,
    WavesModule,
    CardsFreeModule,
    PDFExportModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [ShowCodeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
