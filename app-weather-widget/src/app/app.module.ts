import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainWidgetComponent } from './main-widget/main-widget.component';
import { TempWidgetComponent } from './temp-widget/temp-widget.component';
import { TeddyBearComponent } from './teddy-bear/teddy-bear.component';
import { InfoFilterPipe } from './main-widget/info-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainWidgetComponent,
    TempWidgetComponent,
    TeddyBearComponent,
    InfoFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
