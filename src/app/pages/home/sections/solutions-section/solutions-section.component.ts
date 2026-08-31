import { Component } from '@angular/core';
import { ContentService } from '../../../../core/services/content.service';

@Component({
  selector: 'app-solutions-section',
  standalone: false,
  templateUrl: './solutions-section.component.html',
  styleUrls: ['./solutions-section.component.scss'],
})
export class SolutionsSectionComponent {
  readonly solutions;
  constructor(private content: ContentService) {
    this.solutions = this.content.solutions;
  }
}
