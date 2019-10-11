import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PictureComponent, EverythingComponent } from './app.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/picture',
    pathMatch:'full'
  },
  {
    path:'picture',
    component:PictureComponent
  },
  {
    path:'everything/:size',
    component:EverythingComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
