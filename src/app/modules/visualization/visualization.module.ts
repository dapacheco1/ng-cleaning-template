import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualizationRoutingModule } from './visualization-routing.module';
import { VisualizationComponent } from './visualization.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {CdkMenuModule} from '@angular/cdk/menu';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GuaranteesComponent } from './components/guarantees/guarantees.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { ServiceGuaranteesComponent } from './components/service-guarantees/service-guarantees.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { CancellationPolicyComponent } from './components/cancellation-policy/cancellation-policy.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { RegularCleaningComponent } from './components/services/regular-cleaning/regular-cleaning.component';
import { DeepCleaningComponent } from './components/services/deep-cleaning/deep-cleaning.component';
import { MoveCleaningComponent } from './components/services/move-cleaning/move-cleaning.component';
import { VacationCleaningComponent } from './components/services/vacation-cleaning/vacation-cleaning.component';
import { PostconstructionCleaningComponent } from './components/services/postconstruction-cleaning/postconstruction-cleaning.component';
import { CommercialCleaningComponent } from './components/services/commercial-cleaning/commercial-cleaning.component';
@NgModule({
  declarations: [
    VisualizationComponent,
    NavbarComponent,
    IntroductionComponent,
    AboutUsComponent,
    GuaranteesComponent,
    OurServicesComponent,
    ServiceGuaranteesComponent,
    ReviewsComponent,
    ContactUsComponent,
    FooterComponent,
    CancellationPolicyComponent,
    QuoteFormComponent,
    RegularCleaningComponent,
    DeepCleaningComponent,
    MoveCleaningComponent,
    VacationCleaningComponent,
    PostconstructionCleaningComponent,
    CommercialCleaningComponent,
  ],
  imports: [
    CommonModule,
    VisualizationRoutingModule,
    CdkMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
  ]
})
export class VisualizationModule { }
