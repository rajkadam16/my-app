import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Item1Component } from './componets/components/item1/item1.component';
import { Item2Component } from './componets/components/item2/item2.component';
import { Item3Component } from './componets/components/item3/item3.component';
import { Data1Component } from './componets/components/item1/data1/data1.component';
import { Data2Component } from './componets/components/item1/data2/data2.component';
import { Data3Component } from './componets/components/item1/data3/data3.component';
import { HomeComponent } from './pages/home/home.component';
import { ComponentSidenavComponent } from './pages/component-sidenav/component-sidenav.component';
import { DatepickerComponent } from './componets/datepicker/datepicker.component';
import { Footer1Component } from './componets/footer/footer1/footer1.component';
import { FooterComponent } from './componets/footer/footer.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'components',
    component: ComponentSidenavComponent,
    children: [
      {
        path: 'chapter1',
        component: Item1Component
      },
      {
        path: 'chapter2',
        component: Item2Component
      },
      {
        path: 'chapter3',
        component: Item3Component
      },
      {
        path: 'datepicker',
        component: DatepickerComponent
      },
      {
        path: 'footer',
        component: FooterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
