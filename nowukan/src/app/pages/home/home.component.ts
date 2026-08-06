import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { LearningFlowComponent } from '../../components/learning-flow/learning-flow.component';
import { InstitutionsComponent } from '../../components/institutions/institutions.component';
import { ExplainComponent } from '../../components/explain/explain.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    LearningFlowComponent,
    InstitutionsComponent,
    ExplainComponent,
  ],
  template: `
    <app-hero />
    <app-learning-flow />
    <app-institutions />
    <app-explain />
  `,
})
export class HomeComponent {}
