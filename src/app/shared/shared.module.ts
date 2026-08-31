import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LogoComponent } from './components/logo/logo.component';
import { IconComponent } from './components/icon/icon.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { ProcessStepComponent } from './components/process-step/process-step.component';
import { PortfolioCardComponent } from './components/portfolio-card/portfolio-card.component';
import { FaqItemComponent } from './components/faq-item/faq-item.component';
import { CtaBannerComponent } from './components/cta-banner/cta-banner.component';
import { PagePlaceholderComponent } from './components/page-placeholder/page-placeholder.component';
import { RevealDirective } from './directives/reveal.directive';

const SHARED = [
  LogoComponent,
  IconComponent,
  SectionTitleComponent,
  ServiceCardComponent,
  ProcessStepComponent,
  PortfolioCardComponent,
  FaqItemComponent,
  CtaBannerComponent,
  PagePlaceholderComponent,
  RevealDirective,
];

@NgModule({
  declarations: SHARED,
  imports: [CommonModule, RouterModule],
  exports: [...SHARED, CommonModule, RouterModule],
})
export class SharedModule {}
