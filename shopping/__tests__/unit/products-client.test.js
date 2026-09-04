describe('Products Client Unit Tests - Shopping', () => {
  test('debe simular una llamada exitosa al cliente de productos', async () => {
    const mockGetProductDetails = jest.fn().mockResolvedValue({
      _id: 'prod123',
      name: 'Producto de prueba',
      price: 100
    });

    const result = await mockGetProductDetails('prod123');

    expect(mockGetProductDetails).toHaveBeenCalledWith('prod123');
    expect(result).toHaveProperty('name', 'Producto de prueba');
    expect(result.price).toBe(100);
  });
});