import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  standalone: false,
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss'],
})
export class AboutSectionComponent {
  readonly checks = [
    'Client-Focused Approach',
    'On-Time Delivery',
    'Quality & Reliability',
    'Ongoing Support',
  ];
}
