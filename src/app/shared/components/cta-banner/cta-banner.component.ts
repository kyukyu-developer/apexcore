import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cta-banner',
  standalone: false,
  templateUrl: './cta-banner.component.html',
  styleUrls: ['./cta-banner.component.scss'],
})
export class CtaBannerComponent {
  @Input() headline = "Let's Build Something Amazing Together";
  @Input() text = "Have an idea or a business challenge? Talk to our team and let's find the right technology solution for your business.";
  @Input() primaryLabel = 'Contact Us';
  @Input() primaryRoute = '/contact';
  @Input() secondaryLabel = 'Get Started';
  @Input() secondaryRoute = '/contact';
}
