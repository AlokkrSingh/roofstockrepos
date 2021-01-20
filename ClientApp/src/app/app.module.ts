import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoofPropertiesComponent } from './roof-properties/roof-properties.component';
import { RoofPropertyComponent } from './roof-property/roof-property.component';
import { RoofPropertyAddEditComponent } from './roof-property-add-edit/roof-property-add-edit.component';
import {RoofStockService} from './services/roof-stock.service'

@NgModule({
  declarations: [
    AppComponent,
    RoofPropertiesComponent,
    RoofPropertyComponent,
    RoofPropertyAddEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    RoofStockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
