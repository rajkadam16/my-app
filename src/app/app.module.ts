import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { FooterComponent } from './componets/footer/footer.component';
import { ComponentSidenavComponent } from './pages/component-sidenav/component-sidenav.component';
import { DatepickerComponent } from './componets/datepicker/datepicker.component';
import { Datepicker1Component } from './componets/datepicker/datepicker1/datepicker1.component';
import { Datepicker2Component } from './componets/datepicker/datepicker2/datepicker2.component';
import { Footer1Component } from './componets/footer/footer1/footer1.component';
import { Footer2Component } from './componets/footer/footer2/footer2.component';
import { TableComponent } from './componets/table/table.component';
import { Table1Component } from './componets/table/table1/table1.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './pipes/filter.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { Footer3Component } from './componets/footer/footer3/footer3.component';
import { TabsComponent } from './componets/tabs/tabs.component';
import { Tab1Component } from './componets/tabs/tab1/tab1.component';
import { ProductdetailesComponent } from './componets/productdetailes/productdetailes.component';
import { Productdetailes1Component } from './componets/productdetailes/productdetailes1/productdetailes1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ComponentSidenavComponent,
    DatepickerComponent,
    Datepicker1Component,
    Datepicker2Component,
    Footer1Component,
    Footer2Component,
    TableComponent,
    Table1Component,
    //pipe
    FilterPipe,
    SafeUrlPipe,
    Footer3Component,
    TabsComponent,
    Tab1Component,
    ProductdetailesComponent,
    Productdetailes1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink,
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
