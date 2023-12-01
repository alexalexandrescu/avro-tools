#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import chalk from 'chalk';
import figlet from 'figlet';
import validate from "./commands/validate.js";
import {loadConfig} from "./scripts/loadConfig.js";

// Function to display the banner
async function displayBanner() {
  return new Promise((resolve, reject) => {
    figlet.text("Avro Tools", {
      font: "Small",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: false
    }, function(err, data) {
      if (err) {
        reject(err);
        return;
      }
      console.log(chalk.yellow(data));
      resolve();
    });
  });
}

// Middleware for loading configuration
const loadConfigMiddleware = (argv) => {
  argv.config = loadConfig(argv.config);
};

// Main function to orchestrate the CLI
async function main() {
  try {
    await displayBanner();

    yargs(hideBin(process.argv))
      .option('config', {
        alias: 'c',
        describe: 'Path to the configuration file',
        default: './avroConfig.json',
        type: 'string'
      })
      .middleware(loadConfigMiddleware) // Apply middleware for config loading
      .command(validate)
      .demandCommand(1, 'You need at least one command before moving on')
      .help()
      .version()
      .parse();
  } catch (err) {
    console.error(chalk.red('Error initializing the application:'), err);
    process.exit(1);
  }
}

main();
