import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { I18nPipe } from '../utils/i18n/i18n-pipe';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    I18nPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    I18nPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
