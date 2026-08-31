import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Faq } from '../../../core/models/solution.model';

@Component({
  selector: 'app-faq-item',
  standalone: false,
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.scss'],
})
export class FaqItemComponent {
  @Input() faq!: Faq;
  @Input() open = false;
  @Output() toggled = new EventEmitter<void>();

  onToggle(): void { this.toggled.emit(); }
}
