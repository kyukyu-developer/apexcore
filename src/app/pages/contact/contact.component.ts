import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  submitted = false;

  onSubmit(): void {
    this.submitted = true;
  }
}
