import { Component } from '@angular/core';

interface Step {
  n: number;
  label: string;
  img: string;
}

@Component({
  selector: 'app-learning-steps',
  standalone: true,
  templateUrl: './learning-steps.component.html',
})
export class LearningStepsComponent {
  /** The 8-step learning flow, using the real app screens. */
  readonly steps: Step[] = [
    { n: 1, label: 'Home Dashboard', img: 'assets/journey/A1.jpg' },
    { n: 2, label: 'Topic / Lesson Selection', img: 'assets/journey/A2.jpg' },
    { n: 3, label: 'Skill Level Selection', img: 'assets/journey/A3.jpg' },
    { n: 4, label: 'Words', img: 'assets/journey/K2.jpg' },
    { n: 5, label: 'Phrases', img: 'assets/journey/K1.jpg' },
    { n: 6, label: 'Dialogue', img: 'assets/journey/K3.jpg' },
    { n: 7, label: 'QuickFire', img: 'assets/journey/K4.jpg' },
    { n: 8, label: 'Progress & Completion', img: 'assets/journey/A4.jpg' },
  ];
}
