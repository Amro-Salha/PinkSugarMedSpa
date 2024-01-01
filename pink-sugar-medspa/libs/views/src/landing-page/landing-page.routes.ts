import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';

export const LANDING_PAGE_ROUTES: Routes = [
  {
    path: 'home',
    children: [
      {
        path: '',
        component: LandingPageComponent,
      },
    ],
  },
];
