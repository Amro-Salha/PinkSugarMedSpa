import { Injectable } from '@angular/core';
import emailjs, { init } from 'emailjs-com';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {
    // public key allowed to be used in client side code
    init('FxM2pbqilO7Id44qV');
  }

  public sendEmail(form: any) {
    return emailjs.send('service_mw01hm8', 'template_g4i2r1c', form);
  }
}
