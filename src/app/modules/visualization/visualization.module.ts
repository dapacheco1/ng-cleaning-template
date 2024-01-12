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

@NgModule({
  declarations: [
    VisualizationComponent,
    NavbarComponent,
    IntroductionComponent,
    AboutUsComponent,
    GuaranteesComponent,
    OurServicesComponent
  ],
  imports: [
    CommonModule,
    VisualizationRoutingModule,
    CdkMenuModule,
  ]
})
export class VisualizationModule { }
