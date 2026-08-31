import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-placeholder',
  standalone: false,
  templateUrl: './page-placeholder.component.html',
  styleUrls: ['./page-placeholder.component.scss'],
})
export class PagePlaceholderComponent {
  @Input() eyebrow = 'Coming Soon';
  @Input() title = 'Page';
  @Input() lead = 'This page is being prepared. In the meantime, feel free to explore what we do or reach out directly.';
}
