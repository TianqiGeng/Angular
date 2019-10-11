import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent, PleaseSelectComponent } from './app.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:PleaseSelectComponent,
    children:[]
  },
  {
    path:'detail',
    pathMatch:'full',
    component:DetailComponent,
    children:[]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
