import { Component } from '@angular/core';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-services-page',
  standalone: false,
  template: `
    <section class="page-hero">
      <div class="container">
        <span class="chip">Our Services</span>
        <h1 class="page-hero__title">Complete IT solutions <span class="text-gold">under one roof.</span></h1>
        <p class="page-hero__lead">Everything we do — from ERP consulting to branding — designed to help your business run smarter.</p>
      </div>
    </section>

    <section class="section">
      <div class="container services-grid">
        <app-service-card *ngFor="let s of services" [service]="s"></app-service-card>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <app-cta-banner></app-cta-banner>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    .page-hero { padding: calc(var(--header-height, 92px) + 2rem) 0 2rem; text-align: center; }
    .page-hero .container { max-width: 720px; }
    .page-hero__title { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: clamp(2rem, 4vw, 3rem); letter-spacing: -0.02em; margin: 1rem 0 1rem; color: #202124; line-height: 1.15; }
    .page-hero__lead  { color: #5F6368; font-size: 1.05rem; line-height: 1.65; }
    .services-grid { display: grid; gap: 1.5rem; grid-template-columns: 1fr; }
    @media (min-width: 640px)  { .services-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 1024px) { .services-grid { grid-template-columns: repeat(3, 1fr); } }
  `],
})
export class ServicesListComponent {
  readonly services;
  constructor(private content: ContentService) {
    this.services = this.content.services;
  }
}
