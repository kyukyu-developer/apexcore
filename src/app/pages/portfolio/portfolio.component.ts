import { Component } from '@angular/core';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-portfolio-page',
  standalone: false,
  template: `
    <section class="page-hero">
      <div class="container">
        <span class="chip">Portfolio</span>
        <h1 class="page-hero__title">Selected <span class="text-gold">Demo Projects</span></h1>
        <p class="page-hero__lead">Sample projects illustrating the kinds of solutions we build. Clearly labelled as demonstrations — real client work will replace these as we grow.</p>
      </div>
    </section>

    <section class="section">
      <div class="container portfolio-grid">
        <app-portfolio-card *ngFor="let item of items" [item]="item"></app-portfolio-card>
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
    .portfolio-grid { display: grid; gap: 1.5rem; grid-template-columns: 1fr; }
    @media (min-width: 640px)  { .portfolio-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 1024px) { .portfolio-grid { grid-template-columns: repeat(3, 1fr); } }
  `],
})
export class PortfolioComponent {
  readonly items;
  constructor(private content: ContentService) {
    this.items = this.content.portfolio;
  }
}
