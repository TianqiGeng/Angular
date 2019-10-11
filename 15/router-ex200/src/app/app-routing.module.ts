import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PictureComponent } from './app.component';
import { OtherComponent } from './app.other-component';
import { NestedPastaComponent, NestedCalzoneComponent } from './app.other-component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/picture',
    pathMatch: 'full'
  },
  {
    path: 'picture',
    component: PictureComponent
  },
  {
    path: 'other',
    component: OtherComponent,
    children: [
      {
        path: '',
        redirectTo: 'pasta',
        pathMatch: 'full'
      },
      {
        path: 'pasta',
        component: NestedPastaComponent
      },
      {
        path: 'calzone',
        component: NestedCalzoneComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
