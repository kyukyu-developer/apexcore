import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: false,
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  @Input() variant: 'default' | 'light' = 'default';
  @Input() showTagline = true;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
}
