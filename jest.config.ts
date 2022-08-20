/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/naming-convention */
import type { Config } from '@jest/types'
import { pathsToModuleNameMapper } from 'ts-jest'
import tsconfig from './tsconfig.base.json'

const config: Config.InitialOptions = {
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.ts?(x)'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  collectCoverageFrom: ['src/**/*.ts?(x)', '!src/**/*.d.ts'],
}

export default config
