jest.mock('../Database/db', () => {
    return {
      createUser: jest.fn(),
      User: jest.fn(),
      getAdverts: jest.fn(),
      Advert: jest.fn(),
      sequelize: {
        sync: jest.fn(),
      },
      Car: jest.fn(),
    };
  });