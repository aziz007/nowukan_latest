import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { LearningFlowComponent } from '../../components/learning-flow/learning-flow.component';
import { InstitutionsComponent } from '../../components/institutions/institutions.component';
import { PilotComponent } from '../../components/pilot/pilot.component';
import { ExplainComponent } from '../../components/explain/explain.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    LearningFlowComponent,
    InstitutionsComponent,
    PilotComponent,
    ExplainComponent,
  ],
  template: `
    <app-hero />
    <app-learning-flow />
    <app-institutions />
    <app-pilot />
    <app-explain />
  `,
})
export class HomeComponent {}
