import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { SalesComponent } from './sales/sales.component';
import { SupportComponent } from './support/support.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    SalesComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
