import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { ListViewComponent } from './list-view/list-view.component';
import { NoteViewComponent } from './note-view/note-view.component';
import { EditNoteOpenerComponent } from './edit-note-opener/edit-note-opener.component';
import { EditNoteViewComponent } from './edit-note-view/edit-note-view.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [CanActivateRouteGuard],
    children: [
      { path: 'view/noteview', component: NoteViewComponent },
      { path: '', pathMatch: 'full', redirectTo: 'view/noteview' },
      { path: 'view/listview', component: ListViewComponent },
      { path: 'note/:noteId/edit', component: EditNoteOpenerComponent, outlet: 'noteEditOutlet' },
      
    ],
  },
 
  
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanActivateRouteGuard]
})
export class AppRoutingModule { }
