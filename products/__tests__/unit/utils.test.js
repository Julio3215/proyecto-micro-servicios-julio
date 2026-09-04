const { FormateData } = require('../../src/utils');

describe('Utils Unit Tests - Products', () => {
  test('debe envolver la respuesta del producto en un objeto con propiedad data', () => {
    const productPayload = { _id: 'p1', name: 'Producto Test', price: 50 };
    const result = FormateData(productPayload);

    expect(result).toHaveProperty('data');
    expect(result.data).toBe(productPayload);
  });

  test('debe retornar null cuando se pase un objeto vacio o nulo', () => {
    const result = FormateData(null);
    expect(result).toEqual({ data: null });
  });
});