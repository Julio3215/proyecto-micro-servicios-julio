const { FormateData } = require('../../src/utils');

describe('Utils Unit Tests - Customers', () => {
  test('debe envolver la respuesta en un objeto con propiedad data', () => {
    const customerPayload = { name: 'Juan', role: 'customer' };
    const result = FormateData(customerPayload);

    expect(result).toHaveProperty('data');
    expect(result.data).toBe(customerPayload);
  });

  test('debe retornar null cuando se pase un payload vacio', () => {
    const result = FormateData(null);
    expect(result).toEqual({ data: null });
  });
});