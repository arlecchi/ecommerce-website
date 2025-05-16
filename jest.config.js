module.exports = {
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js',
    },
    transform: {
      '^.+\\.[jt]sx?$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
    setupFiles: ['<rootDir>/jest.setup.js'], // <-- Add this line
  };
  