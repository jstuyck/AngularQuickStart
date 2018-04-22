import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RootComponent } from './components/root/root.component';


@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
