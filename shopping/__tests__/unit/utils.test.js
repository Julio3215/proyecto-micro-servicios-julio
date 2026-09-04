const { FormateData } = require('../../src/utils');

describe('Utils Unit Tests - Shopping', () => {
  test('debe formatear los datos correctamente dentro del objeto data', () => {
    const dataMock = { id: 1, item: 'Shopping Item' };
    const result = FormateData(dataMock);

    expect(result).toHaveProperty('data');
    expect(result.data).toBe(dataMock);
  });

  test('debe responder con data en null si el argumento es null', () => {
    const result = FormateData(null);
    expect(result).toEqual({ data: null });
  });
});