import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'psm-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, AppRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NavbarComponent {
  @ViewChild('sidenav')
  protected sidenav!: MatSidenav;

  constructor(private router: Router) {}

  public goToHomePage() {
    this.router.navigate(['/home']);
  }
  public goToServicePage() {
    this.router.navigate(['/services']);
  }
  protected toggleSideNav() {
    // this.showSideNav = !this.showSideNav;
    this.sidenav.toggle();
  }
}
