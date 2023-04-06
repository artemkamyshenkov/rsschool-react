module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  transform: {
    '^.+\\.tsx$': 'babel-jest',
    '^.+\\.ts$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/src/__mocks__/styleMock.ts',
  },
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
    '<rootDir>/src/main.tsx',
    '<rootDir>/src/vite-env.d.ts',
    'interface',
    'index',
    'service',
    'types',
  ],
};
