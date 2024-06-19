import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Item1Component } from './componets/components/item1/item1.component';
import { Item2Component } from './componets/components/item2/item2.component';
import { Item3Component } from './componets/components/item3/item3.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Data1Component } from './componets/components/item1/data1/data1.component';
import { Data2Component } from './componets/components/item1/data2/data2.component';
import { Data3Component } from './componets/components/item1/data3/data3.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { FooterComponent } from './componets/footer/footer.component';
import { ComponentSidenavComponent } from './pages/component-sidenav/component-sidenav.component';
import { DatepickerComponent } from './componets/datepicker/datepicker.component';
import { Datepicker1Component } from './componets/datepicker/datepicker1/datepicker1.component';
import { Datepicker2Component } from './componets/datepicker/datepicker2/datepicker2.component';
import { Footer1Component } from './componets/footer/footer1/footer1.component';
import { Footer2Component } from './componets/footer/footer2/footer2.component';

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
    ComponentSidenavComponent,
    DatepickerComponent,
    Datepicker1Component,
    Datepicker2Component,
    Footer1Component,
    Footer2Component
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
