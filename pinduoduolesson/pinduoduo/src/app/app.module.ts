import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared';
import { HomeModule } from './home';
import { AppRoutingModule } from './app-routing.module';
import localZh from "@angular/common/locales/zh-Hans";
import { registerLocaleData } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    HomeModule,
    AppRoutingModule,

  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'zh-Hans',
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localZh, 'zh');
  }
}
