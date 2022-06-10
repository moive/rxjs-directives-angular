import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveModule } from './components/reactive/reactive.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
