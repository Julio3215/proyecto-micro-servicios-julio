const CustomerService = require('../../src/services/customer-service');

describe('CustomerService Unit Tests', () => {
  let customerService;
  let mockRepository;

  beforeEach(() => {
    mockRepository = {
      FindCustomer: jest.fn(),
      CreateCustomer: jest.fn(),
      AddNewAddress: jest.fn(),
      GetProfile: jest.fn()
    };
    customerService = new CustomerService();
    customerService.repository = mockRepository;
  });

  test('debe instanciar el servicio de cliente correctamente', () => {
    expect(customerService).toBeDefined();
    expect(customerService.repository).toBeDefined();
  });

  test('debe buscar un cliente existente por su email', async () => {
    mockRepository.FindCustomer.mockResolvedValue({ _id: 'cust123', email: 'cliente@test.com' });

    const result = await customerService.repository.FindCustomer({ email: 'cliente@test.com' });

    expect(mockRepository.FindCustomer).toHaveBeenCalledWith({ email: 'cliente@test.com' });
    expect(result.email).toBe('cliente@test.com');
  });
});