import type { Config } from '@jest/types';

const jestConfig: Config.InitialOptions = {
  moduleFileExtensions: [
    'js',
    'ts',
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: [
    '<rootDir>/test/**/*.test.ts',
  ],
};

export default jestConfig;