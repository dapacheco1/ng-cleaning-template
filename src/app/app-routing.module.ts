import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./modules/visualization/visualization.module') .then(m => m.VisualizationModule),
  },
  {
    path:'admin',
    loadChildren:() => import('./modules/administration/administration.module') .then(m => m.AdministrationModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
