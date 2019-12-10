import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent, HomeDetailComponent, HomeGrandComponent } from './home';

const routes: Routes = [
    { path: '', component: HomeContainerComponent, },
    {
        path: 'home',
        component: HomeContainerComponent,
        children: [
            {
                path: '',
                redirectTo: 'hot',
                pathMatch: 'full'
            },
            {
                path: ':tabLink',
                component: HomeDetailComponent,
                children: [
                    {
                        path: 'grand',
                        component: HomeGrandComponent,
                    }
                ]
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
