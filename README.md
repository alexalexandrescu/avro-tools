# Avro Tools CLI

## Description
Avro Tools CLI is a command-line interface for validating and converting [Avro schemas](https://avro.apache.org/docs/#schemas). Built with Node.js and Yargs, it offers a basic yet opinionated way to manage Avro schema files.

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

## Requirements
- Node.js version 14 or higher is required for this tool, as it relies on ECMAScript Modules (ESM) which have stable support from version 14 onwards.

## Testing
The test suite for Avro Tools CLI is currently a work in progress. We use Jest for our testing framework, but please note that Jest's support for ECMAScript Modules (ESM) is still experimental. As a result, some tests may not yet achieve full coverage or may exhibit unexpected behavior. We are actively working to improve the test suite as the tooling evolves.

For the latest information on Jest's ESM support, see their [official documentation](https://jestjs.io/docs/ecmascript-modules).


## Local Setup
```bash
git clone [repository-url]
cd avro-tools-cli
npm install
```

## License
MIT License