module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.ts'],
    moduleNameMapper: {
      '\\.(gifpng|j|ttf|eot|svg|pg|jpg)$': '<rootDir>/.jest/mocks/fileMock.ts',
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
  }