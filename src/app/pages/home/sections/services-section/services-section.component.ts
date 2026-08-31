import { Component } from '@angular/core';
import { ContentService } from '../../../../core/services/content.service';

@Component({
  selector: 'app-services-section',
  standalone: false,
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
})
export class ServicesSectionComponent {
  readonly services;
  constructor(private content: ContentService) {
    this.services = this.content.services;
  }
}
