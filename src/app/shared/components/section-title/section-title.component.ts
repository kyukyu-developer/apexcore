import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: false,
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss'],
})
export class SectionTitleComponent {
  @Input() eyebrow?: string;
  @Input() title!: string;
  @Input() highlight?: string;
  @Input() lead?: string;
  @Input() align: 'left' | 'center' = 'left';
}
