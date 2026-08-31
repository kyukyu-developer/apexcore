import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: false,
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() name!: string;
  @Input() size = 24;
}
