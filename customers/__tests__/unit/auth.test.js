const { FormateData } = require('../../src/utils');

describe('Auth Unit Tests - Customers', () => {
  test('debe retornar los datos del cliente formateados correctamente', () => {
    const mockCustomer = { _id: 'cust123', email: 'test@example.com' };
    const result = FormateData(mockCustomer);

    expect(result).toBeDefined();
    expect(result).toHaveProperty('data');
    expect(result.data).toEqual(mockCustomer);
  });

  test('debe retornar data en null si el perfil viene vacío', () => {
    const result = FormateData(null);
    expect(result).toEqual({ data: null });
  });
});