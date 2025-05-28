const UserService = require('../../../src/services/userService');
const User = require('../../../src/models/User');

// Mock the User model
jest.mock('../../../src/models/User');

describe('UserService', () => {
  let userService;

  beforeEach(() => {
    userService = new UserService();
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('createUser', () => {
    test('should create a new user successfully', async () => {
      const userData = { email: 'test@example.com', name: 'Test User' };
      const mockUser = { id: 1, ...userData };

      User.create.mockResolvedValue(mockUser);

      const result = await userService.createUser(userData);

      expect(User.create).toHaveBeenCalledWith(userData);
      expect(result).toEqual(mockUser);
    });

    test('should throw error if email already exists', async () => {
      const userData = { email: 'existing@example.com', name: 'Test User' };

      User.create.mockRejectedValue(new Error('Email already exists'));

      await expect(userService.createUser(userData)).rejects.toThrow('Email already exists');
    });

    test('should validate user data before creation', async () => {
      const invalidData = { email: 'invalid-email' };

      await expect(userService.createUser(invalidData)).rejects.toThrow('Invalid user data');
      expect(User.create).not.toHaveBeenCalled();
    });
  });

  describe('getUserById', () => {
    test('should return user if found', async () => {
      const userId = 1;
      const mockUser = { id: userId, email: 'test@example.com' };

      User.findById.mockResolvedValue(mockUser);

      const result = await userService.getUserById(userId);

      expect(User.findById).toHaveBeenCalledWith(userId);
      expect(result).toEqual(mockUser);
    });

    test('should return null if user not found', async () => {
      const userId = 999;

      User.findById.mockResolvedValue(null);

      const result = await userService.getUserById(userId);

      expect(result).toBeNull();
    });
  });
});
