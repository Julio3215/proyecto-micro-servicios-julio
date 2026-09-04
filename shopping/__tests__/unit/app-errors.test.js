const AppErrors = require('../../src/utils/app-errors');

describe('AppErrors Unit Tests - Shopping', () => {
  test('debe exportar y permitir instanciar errores de la aplicación', () => {
    expect(AppErrors).toBeDefined();
    
    const ErrorClass = AppErrors.AppError || AppErrors.APIError || AppErrors;
    if (typeof ErrorClass === 'function') {
      const error = new ErrorClass('AppError', 500, 'Error base');
      expect(error).toBeDefined();
      expect(error.message).toBe('Error base');
    }
  });

  test('debe validar que los módulos de error estén bien estructurados', () => {
    expect(typeof AppErrors).toBe('object');
  });
});