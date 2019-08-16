module.exports = {
    setupFilesAfterEnv: ['<rootDir>/config/jest.setup.js'],
    runner: 'jest-runner-eslint',
    displayName: 'lint',
    testMatch: ['<rootDir>/src/**/*.js'],
};
