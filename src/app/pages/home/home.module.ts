import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { TrustedSectionComponent } from './sections/trusted-section/trusted-section.component';
import { ServicesSectionComponent } from './sections/services-section/services-section.component';
import { WhyChooseSectionComponent } from './sections/why-choose-section/why-choose-section.component';
import { SolutionsSectionComponent } from './sections/solutions-section/solutions-section.component';
import { IndustriesSectionComponent } from './sections/industries-section/industries-section.component';
import { ProcessSectionComponent } from './sections/process-section/process-section.component';
import { PortfolioSectionComponent } from './sections/portfolio-section/portfolio-section.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { CtaSectionComponent } from './sections/cta-section/cta-section.component';
import { FaqSectionComponent } from './sections/faq-section/faq-section.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    TrustedSectionComponent,
    ServicesSectionComponent,
    WhyChooseSectionComponent,
    SolutionsSectionComponent,
    IndustriesSectionComponent,
    ProcessSectionComponent,
    PortfolioSectionComponent,
    AboutSectionComponent,
    CtaSectionComponent,
    FaqSectionComponent,
  ],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
