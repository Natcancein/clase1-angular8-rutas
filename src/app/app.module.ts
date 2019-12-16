import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// se importan los routingComponents
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    //se declaran los routingComponents
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
