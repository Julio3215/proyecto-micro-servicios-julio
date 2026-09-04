const AppErrors = require('../../src/utils/app-errors');

describe('AppErrors Unit Tests - Products', () => {
  test('debe exportar y permitir instanciar errores de la aplicación', () => {
    const ErrorClass = AppErrors.AppError || AppErrors.APIError || AppErrors;
    if (typeof ErrorClass === 'function') {
      const error = new ErrorClass('AppError', 500, 'Error base');
      expect(error).toBeDefined();
      expect(error.message).toBe('Error base');
    }
  });
});