module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1',
    },
  };
  