import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  // constructor() {}
  private errorSubject = new Subject<string>();
  error$ = this.errorSubject.asObservable();

  handleError(error: any) {
    const message = error.message ? error.message : error.toString();
    this.errorSubject.next(message);
  }
}
