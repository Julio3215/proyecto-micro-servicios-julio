const ProductService = require('../../src/services/products-service');

describe('ProductService Unit Tests', () => {
  let productService;
  let mockRepository;

  beforeEach(() => {
    mockRepository = {
      CreateProduct: jest.fn(),
      Products: jest.fn(),
      FindById: jest.fn(),
      FindByCategory: jest.fn()
    };
    productService = new ProductService();
    productService.repository = mockRepository;
  });

  test('debe instanciar el servicio de productos correctamente', () => {
    expect(productService).toBeDefined();
    expect(productService.repository).toBeDefined();
  });

  test('debe retornar una lista de productos desde el repositorio', async () => {
    const mockProductsList = [
      { _id: 'prod1', name: 'Producto A', price: 100 },
      { _id: 'prod2', name: 'Producto B', price: 200 }
    ];
    mockRepository.Products.mockResolvedValue(mockProductsList);

    const result = await productService.repository.Products();

    expect(mockRepository.Products).toHaveBeenCalled();
    expect(result).toHaveLength(2);
    expect(result[0].name).toBe('Producto A');
  });
});
