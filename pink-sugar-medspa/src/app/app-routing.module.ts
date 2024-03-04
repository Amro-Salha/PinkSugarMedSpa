import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from 'libs/views/src';
import { ContactUsPageComponent } from 'libs/views/src/contact-us-page/contact-us-page.component';
import { ServicesPageComponent } from 'libs/views/src/services-page/services-page.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'contact-us', component: ContactUsPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
