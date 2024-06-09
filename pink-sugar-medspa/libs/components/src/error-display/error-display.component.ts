import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandlerService } from 'libs/services/src/error-handler/error-handler.service';

@Component({
  selector: 'psm-error-display',
  template: ` <div *ngIf="errorMessage" class="error-message">
    {{ errorMessage }}
  </div>`,
  standalone: true,
  styles: [
    `
      .error-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translateX(-50%);
        background-color: red;
        color: white;
        font-weight: 600;
        padding: 10px;
        border-radius: 5px;
        z-index: 1000;
      }
    `,
  ],
  imports: [CommonModule],
})
export class ErrorDisplayComponent implements OnInit {
  protected errorMessage?: string;

  constructor(private errorHandler: ErrorHandlerService) {}

  ngOnInit() {
    this.errorHandler.error$.subscribe((message) => {
      this.errorMessage = message;
      setTimeout(() => (this.errorMessage = ''), 5000); // Auto-hide after 5 seconds
    });
  }
}
