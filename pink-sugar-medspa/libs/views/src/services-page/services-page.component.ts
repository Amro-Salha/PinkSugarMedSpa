import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from 'libs/components/src/service/service.component';

export interface Service {
  serviceName: string;
  serviceDescription: string;
  comingSoon?: boolean;
  displayImage: string;
}

@Component({
  selector: 'psm-services-page',
  templateUrl: './services-page.component.html',
  standalone: true,
  imports: [CommonModule, ServiceComponent],
})
export class ServicesPageComponent {
  public services: Service[] = [
    {
      serviceName: 'Radio Frequency Microneedling',
      serviceDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      displayImage: 'assets/placeholder.jpg',
    },
    {
      serviceName: 'Microneedling ',
      serviceDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      displayImage: 'assets/placeholder.jpg',
    },
    {
      serviceName: 'Lash Lift and tint',
      serviceDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      displayImage: 'assets/placeholder.jpg',
    },
    {
      serviceName: 'Brow Lamination and tint',
      serviceDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      displayImage: 'assets/placeholder.jpg',
    },
  ];
}
