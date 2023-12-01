import avro from 'avsc';
import { glob } from 'glob';
import fs from 'fs';
import chalk from 'chalk';

// Helper functions
function readSchemaFile(schemaPath) {
  return fs.readFileSync(schemaPath, 'utf8');
}

function isSchemaValid(schemaData) {
  return new Promise((resolve) => {
    try {
      const schema = JSON.parse(schemaData);
      avro.Type.forSchema(schema);
      resolve(true);
    } catch (err) {
      resolve(false);
    }
  });
}

function validateSchema(schemaPath) {
  const schemaData = readSchemaFile(schemaPath);
  return isSchemaValid(schemaData);
}

// Command handler
const command = {
  command: 'validate',
  describe: 'Validate Avro schemas based on the given configuration',
  handler: async (argv) => {
    const config = argv.config; // Configuration is now attached to argv by the middleware
    console.log(`Validating schemas in ${config.include.join(', ')}`);

    try {
      const files = await glob(config.include, { ignore: config.exclude });
      let allValid = true;
      for (const file of files) {
        const isValid = await validateSchema(file);

        if (!isValid) {
          allValid = false;
          console.log(chalk.red(`\tInvalid Schema detected in file: ${file}`));
        } else if (argv.verbose) {
          console.log(chalk.green(`\tSchema ${file} is valid.`));
        }
      }

      if (allValid) {
        console.log(chalk.green('All schemas are valid.'));
      } else {
        console.log(chalk.red('One or more schemas are invalid.'));
        throw new Error('Invalid schemas found');
      }
    } catch (err) {
      console.error(chalk.red(`Error: ${err.message}`));
      process.exit(1);
    }
  }
};

export default command;
