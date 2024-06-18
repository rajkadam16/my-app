import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Item1Component } from './componets/scrollingSidebar/item1/item1.component';
import { Item2Component } from './componets/scrollingSidebar/item2/item2.component';
import { Item3Component } from './componets/scrollingSidebar/item3/item3.component';

const routes: Routes = [
  {
    path: 'item1',
    component:Item1Component,
    children: [
      {
        path: 'item2',
        component: Item2Component
      }
    ]
  },
  {
    path: 'item2',
    component:Item2Component,
    children: []
  },
  {
    path: 'item3',
    component:Item3Component,
    children: []
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }