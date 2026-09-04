const { FormateData } = require('../../src/utils');

describe('Auth Unit Tests - Products', () => {
  test('debe retornar la estructura de datos del producto formateada', () => {
    const mockProduct = { _id: 'prod123', name: 'Zapatos', price: 80 };
    const result = FormateData(mockProduct);

    expect(result).toBeDefined();
    expect(result).toHaveProperty('data');
    expect(result.data).toEqual(mockProduct);
  });

  test('debe retornar null cuando los datos del producto sean nulos', () => {
    const result = FormateData(null);
    expect(result).toEqual({ data: null });
  });
});