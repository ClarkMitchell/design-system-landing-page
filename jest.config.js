module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/$1",
  },
  testEnvironment: "jsdom",
};
