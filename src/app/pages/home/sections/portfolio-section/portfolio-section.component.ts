import { Component } from '@angular/core';
import { ContentService } from '../../../../core/services/content.service';

@Component({
  selector: 'app-portfolio-section',
  standalone: false,
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss'],
})
export class PortfolioSectionComponent {
  readonly items;
  constructor(private content: ContentService) {
    this.items = this.content.portfolio;
  }
}
