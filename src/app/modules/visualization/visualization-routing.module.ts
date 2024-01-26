import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizationComponent } from './visualization.component';
import { CancellationPolicyComponent } from './components/cancellation-policy/cancellation-policy.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { RegularCleaningComponent } from './components/services/regular-cleaning/regular-cleaning.component';
import { DeepCleaningComponent } from './components/services/deep-cleaning/deep-cleaning.component';
import { MoveCleaningComponent } from './components/services/move-cleaning/move-cleaning.component';
import { VacationCleaningComponent } from './components/services/vacation-cleaning/vacation-cleaning.component';
import { PostconstructionCleaningComponent } from './components/services/postconstruction-cleaning/postconstruction-cleaning.component';
import { CommercialCleaningComponent } from './components/services/commercial-cleaning/commercial-cleaning.component';

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
  },
  {
    path:'services/regular-cleaning',
    component: RegularCleaningComponent,
  },
  {
    path:'services/deep-cleaning',
    component: DeepCleaningComponent,
  },
  {
    path:'services/move-cleaning',
    component: MoveCleaningComponent,
  },
  {
    path:'services/vacation-cleaning',
    component: VacationCleaningComponent,
  },
  {
    path:'services/postconstruction-cleaning',
    component: PostconstructionCleaningComponent,
  },
  {
    path:'services/commercial-cleaning',
    component: CommercialCleaningComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualizationRoutingModule { }
