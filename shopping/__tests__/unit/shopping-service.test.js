const ShoppingService = require('../../src/services/shopping-service');

describe('ShoppingService Unit Tests', () => {
  let shoppingService;
  let mockRepository;

  beforeEach(() => {
    mockRepository = {
      Orders: jest.fn(),
      Cart: jest.fn(),
      AddCartItem: jest.fn(),
      CreateNewOrder: jest.fn()
    };
    shoppingService = new ShoppingService();
    shoppingService.repository = mockRepository;
  });

  test('debe instancia el servicio de shopping correctamente', () => {
    expect(shoppingService).toBeDefined();
    expect(shoppingService.repository).toBeDefined();
  });

  test('debe llamar al repositorio al obtener pedidos de un cliente', async () => {
    mockRepository.Orders.mockResolvedValue([{ _id: 'order123', amount: 500 }]);

    const result = await shoppingService.repository.Orders('user123');

    expect(mockRepository.Orders).toHaveBeenCalledWith('user123');
    expect(result).toHaveLength(1);
    expect(result[0]._id).toBe('order123');
  });
});