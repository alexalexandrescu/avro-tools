// loadConfig.test.js
import { loadConfig } from './loadConfig';
import fs from 'fs';
import path from 'path';

jest.mock('fs');
jest.mock('path');

describe('loadConfig', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('loads and parses a valid config file', () => {
    fs.readFileSync.mockReturnValue(JSON.stringify({ include: ['test'] }));
    path.resolve.mockReturnValue('path/to/config.json');

    const config = loadConfig('config.json');
    expect(config).toEqual({ include: ['test'] });
  });

  // More tests for error handling...
});
