import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComponentSidenavComponent } from './pages/component-sidenav/component-sidenav.component';
import { DatepickerComponent } from './componets/datepicker/datepicker.component';
import { FooterComponent } from './componets/footer/footer.component';
import { TableComponent } from './componets/table/table.component';
import { TabsComponent } from './componets/tabs/tabs.component';
import { ProductdetailesComponent } from './componets/productdetailes/productdetailes.component';
import { SideswiperComponent } from './componets/sideswiper/sideswiper.component';
import { FaqsComponent } from './componets/faqs/faqs.component';
import { CarouselComponent } from './componets/carousel/carousel.component';
import { LoaderComponent } from './componets/loader/loader.component';
import { ListgroupComponent } from './componets/listgroup/listgroup.component';
import { CardComponent } from './componets/card/card.component';
import { ProfilesectionComponent } from './componets/profilesection/profilesection.component';
import { PricingComponent } from './componets/pricing/pricing.component';
import { ToggelsbuttonComponent } from './componets/toggelsbutton/toggelsbutton.component';
import { InputsComponent } from './componets/inputs/inputs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch:"full"
    
  },
  {
    path: 'home',
    component: HomeComponent,
    
  },
  {
    path: 'components',
    component: ComponentSidenavComponent,
    children: [
      {
        path: 'datepicker',
        component: DatepickerComponent
      },
      {
        path: 'footer',
        component: FooterComponent
      },
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'tabs',
        component: TabsComponent
      },
      {
        path: 'productdetailes',
        component: ProductdetailesComponent
      },
      {
        path: 'sideswiper',
        component: SideswiperComponent
      },
      {
        path: 'faqs',
        component: FaqsComponent
      },
      {
        path: 'carousel',
        component: CarouselComponent
      },
      {
        path: 'loader',
        component: LoaderComponent
      },
      {
        path: 'listgroup',
        component: ListgroupComponent
      },
      {
        path: 'card',
        component: CardComponent
      },
      {
        path: 'profilesection',
        component: ProfilesectionComponent
      },
      {
        path: 'pricing',
        component: PricingComponent
      },
      {
        path: 'toggelbtn',
        component: ToggelsbuttonComponent
      },
      {
        path:'input',
        component:InputsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
