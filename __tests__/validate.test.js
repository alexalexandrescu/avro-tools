// validate.test.js
import validate, { readSchemaFile, isSchemaValid } from '../commands/validate';
import avro from 'avsc';
import fs from 'fs';
import { glob } from 'glob';
import chalk from 'chalk';

jest.mock('fs');
jest.mock('avsc');
jest.mock('glob');

describe('validate command', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('readSchemaFile reads and returns schema file content', () => {
    fs.readFileSync.mockReturnValue('{"type": "record"}');
    const content = readSchemaFile('path/to/schema.avsc');
    expect(content).toBe('{"type": "record"}');
    expect(fs.readFileSync).toHaveBeenCalledWith('path/to/schema.avsc', 'utf8');
  });

  // More tests for isSchemaValid and the command handler...
});
