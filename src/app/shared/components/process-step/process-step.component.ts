import { Component, Input } from '@angular/core';
import { ProcessStep } from '../../../core/models/solution.model';

@Component({
  selector: 'app-process-step',
  standalone: false,
  templateUrl: './process-step.component.html',
  styleUrls: ['./process-step.component.scss'],
})
export class ProcessStepComponent {
  @Input() step!: ProcessStep;
  @Input() isLast = false;
}
