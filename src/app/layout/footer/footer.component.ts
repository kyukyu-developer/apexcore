import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  readonly year = new Date().getFullYear();

  readonly quickLinks = [
    { label: 'Home',      route: '/' },
    { label: 'About Us',  route: '/about' },
    { label: 'Services',  route: '/services' },
    { label: 'Solutions', route: '/solutions' },
    { label: 'Portfolio', route: '/portfolio' },
    { label: 'Contact',   route: '/contact' },
  ];

  readonly serviceLinks = [
    { label: 'ERP Consulting',           route: '/services/erp-consulting' },
    { label: 'Mobile App Development',   route: '/services/mobile-app' },
    { label: 'Website Development',      route: '/services/website' },
    { label: 'Custom Software',          route: '/services/custom-software' },
    { label: 'Business Mail',            route: '/services/business-mail' },
    { label: 'Logo Design & Branding',   route: '/services/logo-branding' },
  ];
}
