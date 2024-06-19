import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Item1Component } from './componets/scrollingSidebar/item1/item1.component';
import { Item2Component } from './componets/scrollingSidebar/item2/item2.component';
import { Item3Component } from './componets/scrollingSidebar/item3/item3.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Data1Component } from './componets/scrollingSidebar/item1/data1/data1.component';
import { Data2Component } from './componets/scrollingSidebar/item1/data2/data2.component';
import { Data3Component } from './componets/scrollingSidebar/item1/data3/data3.component';
import { HomeComponent } from './componets/home/home.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { FooterComponent } from './componets/footer/footer.component';
import { SidescrollComponent } from './componets/sidescroll/sidescroll.component';

@NgModule({
  declarations: [
    AppComponent,
    Item1Component,
    Item2Component,
    Item3Component,
    Data1Component,
    Data2Component,
    Data3Component,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SidescrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
