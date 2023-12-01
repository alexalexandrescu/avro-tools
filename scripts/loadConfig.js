import chalk from "chalk";
import * as path from "path";
import fs from "fs";

// Function to load the configuration
function loadConfig(configPath) {
  try {
    const absolutePath = path.resolve(process.cwd(), configPath);
    const configFile = fs.readFileSync(absolutePath, 'utf8');
    return JSON.parse(configFile);
  } catch (err) {
    console.error(chalk.red(`Error loading config file at ${configPath}: ${err.message}`))
    process.exit(1);
  }
}

export { loadConfig }