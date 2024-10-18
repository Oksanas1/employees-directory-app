module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
};