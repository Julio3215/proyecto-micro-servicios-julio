const { FormateData } = require('../../src/utils');

describe('Auth Unit Tests - Shopping', () => {
  test('debe retornar la estructura de datos correcta al formatear', () => {
    const mockPayload = { id: '12345', name: 'Test Product' };
    const result = FormateData(mockPayload);

    expect(result).toBeDefined();
    expect(result).toHaveProperty('data');
    expect(result.data).toEqual(mockPayload);
  });

  test('debe retornar null o data vacía si el payload es nulo', () => {
    const result = FormateData(null);
    expect(result).toEqual({ data: null });
  });
});