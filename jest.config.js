module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.tsx?$': ['ts-jest', {}],
    },
    // globals: {
    //   'ts-jest': {
    //     tsconfig: './tsconfig.json', // Replace with the actual path to your tsconfig.json
    //   },
    // },
    testMatch: [
      '**/__tests__/**/*.ts',
      '**/?(*.)+(spec|test).ts',
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: ['/node_modules/'],
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
  };
  