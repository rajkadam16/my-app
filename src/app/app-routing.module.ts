import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComponentSidenavComponent } from './pages/component-sidenav/component-sidenav.component';
import { DatepickerComponent } from './componets/datepicker/datepicker.component';
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
