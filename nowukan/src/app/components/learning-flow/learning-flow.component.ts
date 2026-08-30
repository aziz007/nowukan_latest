import { Component } from '@angular/core';

interface JourneyScreen {
  id: string;
  img: string;
  title: string;
}

@Component({
  selector: 'app-learning-flow',
  standalone: true,
  templateUrl: './learning-flow.component.html',
})
export class LearningFlowComponent {
  /** One static preview screen per tier — no carousel, no auto-rotation. */
  readonly screens: JourneyScreen[] = [
    { id: 's1', img: 'assets/journey/K2.png', title: 'Junior' },
    { id: 's2', img: 'assets/journey/A1.png', title: 'Skilled' },
    { id: 's3', img: 'assets/journey/T1.png', title: 'Advanced' },
  ];
}
