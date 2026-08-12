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
    { n: 1, label: 'Home Dashboard', img: 'assets/img/img-6c186ce136.jpeg' },
    { n: 2, label: 'Topic / Lesson Selection', img: 'assets/img/img-3f2fc6685d.jpeg' },
    { n: 3, label: 'Skill Level Selection', img: 'assets/img/img-c901a9673e.jpeg' },
    { n: 4, label: 'Words', img: 'assets/img/img-9418e1f160.jpeg' },
    { n: 5, label: 'Phrases', img: 'assets/img/img-7e421e52d5.jpeg' },
    { n: 6, label: 'Dialogue', img: 'assets/img/img-a808eb8bdb.jpeg' },
    { n: 7, label: 'QuickFire', img: 'assets/img/img-c8fe49600d.jpeg' },
    { n: 8, label: 'Progress & Completion', img: 'assets/img/img-5c58b25df4.jpeg' },
  ];
}
