import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizationComponent } from './visualization.component';
import { CancellationPolicyComponent } from './components/cancellation-policy/cancellation-policy.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';

const routes: Routes = [
  {
    path:'',
    component:VisualizationComponent,
  },
  {
    path:'cancellation-policy',
    component: CancellationPolicyComponent,
  },
  {
    path:'quote-form',
    component: QuoteFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualizationRoutingModule { }
