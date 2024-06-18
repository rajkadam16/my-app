import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScrollingSidebarComponent } from './componets/scrolling-sidebar/scrolling-sidebar.component';
import { Item1Component } from './componets/scrollingSidebar/item1/item1.component';
import { Item2Component } from './componets/scrollingSidebar/item2/item2.component';
import { Item3Component } from './componets/scrollingSidebar/item3/item3.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterLink, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ScrollingSidebarComponent,
    Item1Component,
    Item2Component,
    Item3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
