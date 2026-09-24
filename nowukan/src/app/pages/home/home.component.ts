import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { LearningFlowComponent } from '../../components/learning-flow/learning-flow.component';
import { InstitutionsComponent } from '../../components/institutions/institutions.component';
import { ExplainComponent } from '../../components/explain/explain.component';
import { CompetitionPromoComponent } from '../../components/competition-promo/competition-promo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    LearningFlowComponent,
    InstitutionsComponent,
    ExplainComponent,
    CompetitionPromoComponent,
  ],
  template: `
    <app-hero />
    <app-institutions />
    <app-explain />
    <app-competition-promo />
    <app-learning-flow />
  `,
})
export class HomeComponent {}
