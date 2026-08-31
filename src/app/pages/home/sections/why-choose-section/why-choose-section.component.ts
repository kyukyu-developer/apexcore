import { Component } from '@angular/core';
import { ContentService } from '../../../../core/services/content.service';

@Component({
  selector: 'app-why-choose-section',
  standalone: false,
  templateUrl: './why-choose-section.component.html',
  styleUrls: ['./why-choose-section.component.scss'],
})
export class WhyChooseSectionComponent {
  readonly strengths;
  constructor(private content: ContentService) {
    this.strengths = this.content.strengths;
  }
}
