import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EmailService } from 'libs/services/src/emailService/email.service';

export type FormData = {
  firstName: '';
  lastName: '';
  phone: '';
  email: '';
  info: '';
};

@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
})
export class ContactUsPageComponent {
  protected formData: FormData = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    info: '',
  };

  constructor(private emailService: EmailService) {}

  protected onSubmit(form: FormData) {
    const request = this.emailService.sendEmail(form);
    request.then((res) => {
      if (res.status === 200) {
        window.location.reload();
      } else {
        throw new Error(`Message sending failed response code: ${res.status}`);
      }
    });
  }
}
