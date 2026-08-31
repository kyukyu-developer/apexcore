import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  standalone: false,
  template: `
    <app-page-placeholder
      eyebrow="About Us"
      title="A new IT partner, built to grow with your business."
      lead="APEX CORE is a newly established IT company focused on delivering practical, modern digital solutions. Full page coming soon — for now, please explore our services or get in touch.">
    </app-page-placeholder>
  `,
})
export class AboutComponent {}
