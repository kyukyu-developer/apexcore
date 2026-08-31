import { Component, Input } from '@angular/core';
import { PortfolioItem } from '../../../core/models/solution.model';

@Component({
  selector: 'app-portfolio-card',
  standalone: false,
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss'],
})
export class PortfolioCardComponent {
  @Input() item!: PortfolioItem;
}
