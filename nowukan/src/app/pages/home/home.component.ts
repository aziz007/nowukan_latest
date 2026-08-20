import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { LearningFlowComponent } from '../../components/learning-flow/learning-flow.component';
import { LearningStepsComponent } from '../../components/learning-steps/learning-steps.component';
import { InstitutionsComponent } from '../../components/institutions/institutions.component';
import { ExplainComponent } from '../../components/explain/explain.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    LearningFlowComponent,
    LearningStepsComponent,
    InstitutionsComponent,
    ExplainComponent,
  ],
  template: `
    <app-hero />
    <app-institutions />
    <app-learning-steps />
    <app-explain />
    <app-learning-flow />
  `,
})
export class HomeComponent {}
