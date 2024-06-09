import { ErrorHandlerService } from './error-handler.service';

describe('ErrorHandlerService', () => {
  const service: ErrorHandlerService = new ErrorHandlerService();

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
