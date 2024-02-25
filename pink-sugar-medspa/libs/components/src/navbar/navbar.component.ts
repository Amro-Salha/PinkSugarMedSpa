import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'psm-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NavbarComponent {
  constructor(private router: Router) {}

  public goToHomePage() {
    this.router.navigate(['/home']);
  }
  public goToServicePage() {
    this.router.navigate(['/services']);
  }
}
