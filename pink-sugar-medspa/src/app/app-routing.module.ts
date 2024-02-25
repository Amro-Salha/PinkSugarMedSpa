import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from 'libs/views/src';
import { ServicesPageComponent } from 'libs/views/src/services-page/services-page.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
