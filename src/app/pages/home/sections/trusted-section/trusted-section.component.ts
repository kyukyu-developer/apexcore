import { Component } from '@angular/core';

@Component({
  selector: 'app-trusted-section',
  standalone: false,
  templateUrl: './trusted-section.component.html',
  styleUrls: ['./trusted-section.component.scss'],
})
export class TrustedSectionComponent {
  readonly items = [
    { icon: 'blocks',  label: 'logoipsum' },
    { icon: 'gear',    label: 'logoipsum' },
    { icon: 'shield',  label: 'LOGOIPSUM' },
    { icon: 'spark',   label: 'logoipsum' },
    { icon: 'layers',  label: 'LOGOIPSUM' },
  ];
}
