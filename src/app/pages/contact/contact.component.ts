import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact-page',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  form = {
    name: '',
    email: '',
    company: '',
    message: '',
  };

  sending = false;
  submitted = false;
  errorMessage = '';

  async onSubmit(): Promise<void> {
    if (this.sending) return;

    this.sending = true;
    this.submitted = false;
    this.errorMessage = '';

    const { serviceId, templateId, publicKey, toEmail } = environment.emailjs;

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: this.form.name,
          from_email: this.form.email,
          company: this.form.company || '(not provided)',
          message: this.form.message,
          to_email: toEmail,
          reply_to: this.form.email,
        },
        { publicKey }
      );

      this.submitted = true;
      this.form = { name: '', email: '', company: '', message: '' };
    } catch (err: any) {
      this.errorMessage =
        err?.text || err?.message || 'Something went wrong. Please try again or email us directly.';
    } finally {
      this.sending = false;
    }
  }
}
