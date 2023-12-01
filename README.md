# Avro Tools CLI

## Description
Avro Tools CLI is a command-line interface for validating and converting Avro schemas. Built with Node.js and Yargs, it offers a basic yet opinionated way to manage Avro schema files.

## Features
- Validate Avro schemas.
- Convert Avro files (feature under development).
- Simple and opinionated configuration.

## Installation
```bash
npm install avro-tools-cli
```

## Usage
To use the CLI, run the following commands:

### Validate Schemas
Validate all schemas are AVRO specification compliant in the schemas directory:
```bash
avro-tools validate --config your-config.json
```

### Convert Files (Coming Soon)
```bash
avro-tools convert [options]
```

### Help
To get more information about the commands:
```bash
avro-tools --help
````

### Config
Specify a custom configuration file:
```bash
avro-tools --config path/to/config.json
```

### Version
Check the version of the CLI tool:

``` bash
avro-tools --version
```

## Configuration
Create an avroConfig.json file:

```json
{
"include": ["schemas/**/*.avsc"],
"exclude": ["schemas/excluded/**/*.avsc"]
}
```

## Development
Node.js Version: xx.xx
ESM Modules

## Local Setup
```bash
git clone [repository-url]
cd avro-tools-cli
npm install
```

## License
MIT License