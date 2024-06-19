import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Item1Component } from './componets/scrollingSidebar/item1/item1.component';
import { Item2Component } from './componets/scrollingSidebar/item2/item2.component';
import { Item3Component } from './componets/scrollingSidebar/item3/item3.component';
import { Data1Component } from './componets/scrollingSidebar/item1/data1/data1.component';
import { Data2Component } from './componets/scrollingSidebar/item1/data2/data2.component';
import { Data3Component } from './componets/scrollingSidebar/item1/data3/data3.component';
import { HomeComponent } from './componets/home/home.component';
import { SidescrollComponent } from './componets/sidescroll/sidescroll.component';

const routes: Routes = [
  {
    path: 'components',
    component: SidescrollComponent,
    children: [
      {
        path: 'chapter1', component:Item1Component,
        children: [
          {
            path: 'data1',
            component: Data1Component,
          },
          {
            path: 'data2',
            component: Data2Component,
          },

          {
            path: 'data3',
            component: Data3Component,
          },
        ],
      },
      {
        path: 'chapter2',
        component: Item2Component,
      },
      {
        path: 'chapter3',
        component: Item3Component,
      },
    ],
  },
  {
    path: 'home',
    component: HomeComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
