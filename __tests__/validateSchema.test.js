const { isSchemaValid } = require('../commands/validate.js');

describe('Avro Schema Validation Tests', () => {
  test('validates a correct schema', () => {
    const validSchemaData = JSON.stringify({
      type: 'record',
      name: 'TestRecord',
      fields: [
        { name: 'testField', type: 'string' }
      ]
    });
    expect(isSchemaValid(validSchemaData)).toBeTruthy();
  });

  test('rejects an incorrect schema', () => {
    const invalidSchemaData = JSON.stringify({
      type: 'record',
      name: 'TestRecord',
      fields: [
        { name: 'testField', type: 'invalidType' } // Use an invalid type here
      ]
    });
    expect(isSchemaValid(invalidSchemaData)).toBeFalsy();
  });
});
