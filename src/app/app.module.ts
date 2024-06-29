import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
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
import { SideswiperComponent } from './componets/sideswiper/sideswiper.component';
import { Sideswiper1Component } from './componets/sideswiper/sideswiper1/sideswiper1.component';
import { FaqsComponent } from './componets/faqs/faqs.component';
import { Faqs1Component } from './componets/faqs/faqs1/faqs1.component';
import { Faqs2Component } from './componets/faqs/faqs2/faqs2.component';
import { Sideswiper2Component } from './componets/sideswiper/sideswiper2/sideswiper2.component';
import { CarouselComponent } from './componets/carousel/carousel.component';
import { Carousel1Component } from './componets/carousel/carousel1/carousel1.component';
import { LoaderComponent } from './componets/loader/loader.component';
import { Loader1Component } from './componets/loader/loader1/loader1.component';
import { Loader2Component } from './componets/loader/loader2/loader2.component';
import { ListgroupComponent } from './componets/listgroup/listgroup.component';
import { Listgroup1Component } from './componets/listgroup/listgroup1/listgroup1.component';
import { CardComponent } from './componets/card/card.component';
import { Card1Component } from './componets/card/card1/card1.component';
import { Card2Component } from './componets/card/card2/card2.component';
import { ProfilesectionComponent } from './componets/profilesection/profilesection.component';
import { Profile1Component } from './componets/profilesection/profile1/profile1.component';
import { Profile2Component } from './componets/profilesection/profile2/profile2.component';
import { PricingComponent } from './componets/pricing/pricing.component';
import { Pricing1Component } from './componets/pricing/pricing1/pricing1.component';
import { Pricing2Component } from './componets/pricing/pricing2/pricing2.component';
import { ToggelsbuttonComponent } from './componets/toggelsbutton/toggelsbutton.component';
import { Toggelsbutton1Component } from './componets/toggelsbutton/toggelsbutton1/toggelsbutton1.component';
import { Toggelsbutton2Component } from './componets/toggelsbutton/toggelsbutton2/toggelsbutton2.component';
import { Toggelsbutton3Component } from './componets/toggelsbutton/toggelsbutton3/toggelsbutton3.component';
import { Toggelsbutton4Component } from './componets/toggelsbutton/toggelsbutton4/toggelsbutton4.component';
import { Loader3Component } from './componets/loader/loader3/loader3.component';
import { Tab2Component } from './componets/tabs/tab2/tab2.component';
import { InputsComponent } from './componets/inputs/inputs.component';
import { Inputs1Component } from './componets/inputs/inputs1/inputs1.component';
import { Inputs2Component } from './componets/inputs/inputs2/inputs2.component';
import { Inputs3Component } from './componets/inputs/inputs3/inputs3.component';

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
    Productdetailes1Component,
    SideswiperComponent,
    Sideswiper1Component,
    FaqsComponent,
    Faqs1Component,
    Faqs2Component,
    Sideswiper2Component,
    CarouselComponent,
    Carousel1Component,
    LoaderComponent,
    Loader1Component,
    Loader2Component,
    ListgroupComponent,
    Listgroup1Component,
    CardComponent,
    Card1Component,
    Card2Component,
    ProfilesectionComponent,
    Profile1Component,
    Profile2Component,
    PricingComponent,
    Pricing1Component,
    Pricing2Component,
    ToggelsbuttonComponent,
    Toggelsbutton1Component,
    Toggelsbutton2Component,
    Toggelsbutton3Component,
    Toggelsbutton4Component,
    Loader3Component,
    Tab2Component,
    InputsComponent,
    Inputs1Component,
    Inputs2Component,
    Inputs3Component,
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
    NgxPaginationModule,
    RouterLinkActive
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
