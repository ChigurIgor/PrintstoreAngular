import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarTopComponent } from './navigation-bar-top/navigation-bar-top.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarTopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
