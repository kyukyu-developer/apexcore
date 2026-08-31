import { Component } from '@angular/core';
import { ContentService } from '../../../../core/services/content.service';

@Component({
  selector: 'app-process-section',
  standalone: false,
  templateUrl: './process-section.component.html',
  styleUrls: ['./process-section.component.scss'],
})
export class ProcessSectionComponent {
  readonly steps;
  constructor(private content: ContentService) {
    this.steps = this.content.process;
  }
}
