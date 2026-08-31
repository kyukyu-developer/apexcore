import { Component } from '@angular/core';
import { ContentService } from '../../../../core/services/content.service';
import { Faq } from '../../../../core/models/solution.model';

@Component({
  selector: 'app-faq-section',
  standalone: false,
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.scss'],
})
export class FaqSectionComponent {
  readonly faqs: Faq[];
  openIndex = 0;

  constructor(private content: ContentService) {
    this.faqs = this.content.faqs;
  }

  toggle(i: number): void {
    this.openIndex = this.openIndex === i ? -1 : i;
  }
}
