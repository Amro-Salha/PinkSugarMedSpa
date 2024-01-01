import { Routes } from '@angular/router';
import { LANDING_PAGE_ROUTES } from 'libs/views/src';

export const APP_ROUTES: Routes = [
  {
    path: '',
    children: [{ path: '', redirectTo: '/home', pathMatch: 'full' }],

    // Views
    ...LANDING_PAGE_ROUTES,
  },
  { path: '**', redirectTo: '/home' },
];
