const AppErrors = require('../../src/utils/app-errors');

describe('Map Error Unit Tests - Customers', () => {
  test('debe procesar e instanciar errores para el mapeo', () => {
    const ErrorClass = AppErrors.AppError || AppErrors.APIError || AppErrors;
    if (typeof ErrorClass === 'function') {
      const originalError = new ErrorClass('AppError', 400, 'Error personalizado');
      expect(originalError).toBeDefined();
      expect(originalError.message).toBe('Error personalizado');
    }
  });
});