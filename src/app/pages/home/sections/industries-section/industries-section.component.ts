import { Component } from '@angular/core';
import { ContentService } from '../../../../core/services/content.service';

@Component({
  selector: 'app-industries-section',
  standalone: false,
  templateUrl: './industries-section.component.html',
  styleUrls: ['./industries-section.component.scss'],
})
export class IndustriesSectionComponent {
  readonly industries;
  constructor(private content: ContentService) {
    this.industries = this.content.industries;
  }
}
