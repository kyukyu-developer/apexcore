import { Component, Input } from '@angular/core';
import { ServiceItem } from '../../../core/models/service-item.model';

@Component({
  selector: 'app-service-card',
  standalone: false,
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss'],
})
export class ServiceCardComponent {
  @Input() service!: ServiceItem;
  @Input() index?: number;

  get indexLabel(): string | null {
    return this.index != null ? this.index.toString().padStart(2, '0') : null;
  }

  get topBullets(): string[] {
    return (this.service?.bullets ?? []).slice(0, 3);
  }
}
