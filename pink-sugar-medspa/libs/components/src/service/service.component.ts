import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'psm-service',
  templateUrl: './service.component.html',
  standalone: true,
  imports: [CommonModule, MatIconModule],
})
export class ServiceComponent {
  @Input()
  public serviceName?: string;

  @Input()
  public serviceDescription?: string[];

  @Input()
  public displayImage?: string;

  @Input()
  public comingSoon?: boolean;
}
