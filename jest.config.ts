import type { Config } from "jest";
const config: Config = {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  collectCoverageFrom: [
    "src/**/*.ts",
    "src/**/*.tsx",
    "!src/types.ts",
    "!src/vite-env.d.ts",
    "!src/App.tsx",
    "!src/main.tsx",
    "!src/components/common/index.ts",
  ],
  roots: ["<rootDir>/src"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};

export default config;
