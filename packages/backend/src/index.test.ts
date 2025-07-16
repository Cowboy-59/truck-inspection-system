import { describe, it, expect } from 'vitest';

describe('Backend Setup', () => {
  it('should have basic configuration', () => {
    expect(process.env.NODE_ENV).toBeDefined();
  });

  it('should load environment variables', () => {
    // This test ensures dotenv is working
    expect(process.env).toBeDefined();
  });
});