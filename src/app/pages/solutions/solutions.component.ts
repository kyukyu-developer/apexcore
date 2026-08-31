import { Component } from '@angular/core';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-solutions-page',
  standalone: false,
  template: `
    <app-page-placeholder
      eyebrow="Solutions"
      title="Business systems tailored to your operation."
      lead="Explore the ready-to-adapt solutions we build most often. A dedicated solutions page is on the way — reach out for a demo today.">
    </app-page-placeholder>
  `,
})
export class SolutionsComponent {
  readonly solutions;
  constructor(private content: ContentService) {
    this.solutions = this.content.solutions;
  }
}
