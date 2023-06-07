import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js", "json", "tsx"],

  globals: {
    "ts-jest": {
      // 指定ts-jest使用的tsconfig配置
      tsconfig: "./configs/tsconfig.test.json",
    },
  },
};

export default config;
