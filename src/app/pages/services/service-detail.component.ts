import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContentService } from '../../core/services/content.service';
import { ServiceItem } from '../../core/models/service-item.model';

@Component({
  selector: 'app-service-detail',
  standalone: false,
  template: `
    <ng-container *ngIf="service; else notFound">
      <app-page-placeholder
        [eyebrow]="'Service'"
        [title]="service.title"
        [lead]="service.summary + ' Detailed page coming soon — contact us for a tailored proposal.'">
      </app-page-placeholder>
    </ng-container>

    <ng-template #notFound>
      <app-page-placeholder
        eyebrow="Not Found"
        title="Service not found"
        lead="The service you're looking for does not exist. Explore our services or head back home.">
      </app-page-placeholder>
    </ng-template>
  `,
})
export class ServiceDetailComponent implements OnDestroy {
  service: ServiceItem | undefined;
  private sub?: Subscription;

  constructor(private route: ActivatedRoute, private content: ContentService) {
    this.sub = this.route.paramMap.subscribe(p => {
      const id = p.get('id');
      this.service = this.content.services.find(s => s.id === id);
    });
  }

  ngOnDestroy(): void { this.sub?.unsubscribe(); }
}
