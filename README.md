# React + TypeScript + Vite + Jest

## Jest setup for React TypeScript Vite project - 2025
1. Install required Modules (-D)
    - jest
    - ts-jest
    - @types/jest
    - @testing-library/react
    - @testing-library/jest-dom
    - jest-environment-jsdom ts-node
2. Setup files
    - jest.setup.ts (inside /test folder)
    - jest.config.ts
    - file-mocks.js
3. Update tsconfig.json
4. Fix type from jest
    - add "@testing-library/jest-dom" in compiler options
    - add "test" folder inside include property in tsconfig.app.json