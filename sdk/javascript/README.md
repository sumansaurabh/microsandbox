# Microsandbox JavaScript/TypeScript SDK

A secure, efficient sandbox for executing untrusted code from TypeScript/JavaScript applications.

## Installation

```sh
npm install microsandbox
```

## Requirements

- Node.js 14.x or later
- A running Microsandbox server with a valid API key

## Configuration

Before using the SDK, you need to set your Microsandbox API key:

```sh
export MSB_API_KEY=msb_***
```

## Quick Start

Here's a simple example using the NodeSandbox to execute JavaScript code:

```typescript
import { NodeSandbox } from "microsandbox";

async function main() {
  // Create and start a Node.js sandbox
  const sb = await NodeSandbox.create({ name: "test" });

  try {
    // Execute JavaScript code in the sandbox
    let exec = await sb.run("var name = 'JavaScript'");
    exec = await sb.run("console.log(`Hello ${name}!`)");

    // Get the output
    console.log(await exec.output()); // prints Hello JavaScript!
  } finally {
    // Stop the sandbox when done
    await sb.stop();
  }
}

main().catch(console.error);
```

## Available Sandbox Types

The SDK provides several specialized sandbox environments:

- `NodeSandbox`: For executing JavaScript/TypeScript code
- `PythonSandbox`: For executing Python code

Each sandbox type is optimized for its respective language environment.

## Creating a Sandbox

You can create a sandbox with custom options:

```typescript
import { NodeSandbox, SandboxOptions } from "microsandbox";

// Using builder pattern
const options = SandboxOptions.builder()
  .name("my-sandbox")
  .memory(1024)
  .cpus(2)
  .build();

// Create and start the sandbox
const sandbox = await NodeSandbox.create(options);

// Don't forget to stop the sandbox when done
await sandbox.stop();
```

## Running Shell Commands

You can execute shell commands in the sandbox:

```typescript
const cmd = await sandbox.command.run("ls", ["-la"]);
console.log(await cmd.output());
console.log("Exit code:", cmd.exitCode);
```

## Monitoring Sandbox Metrics

Get resource usage metrics for your sandbox:

```typescript
// Get all metrics
const metrics = await sandbox.metrics.all();
console.log(metrics);

// Get specific metrics
const cpuUsage = await sandbox.metrics.cpu();
const memoryUsage = await sandbox.metrics.memory();
const diskUsage = await sandbox.metrics.disk();
```

## Error Handling

```typescript
try {
  const exec = await sandbox.run("invalid code");

  if (exec.hasError()) {
    console.error("Execution error:", await exec.error());
  } else {
    console.log("Result:", await exec.output());
  }
} catch (err) {
  console.error("Sandbox error:", err.message);
}
```

## Development

### Building the SDK

```sh
npm run build
```

### Running Tests

```sh
npm test
```

### Running Examples

```sh
# Run the schema validation example (demonstrates AI SDK v6 compatibility)
npm run example:schema-validation

# Run other examples
npm run example:node
npm run example:python
npm run example:command
npm run example:metrics
```

## AI SDK v6 Compatibility

This package includes fixes for **GitHub Issue #10122** related to missing dependencies in AI SDK v6 beta. If you're integrating with Vercel AI SDK and using schema validation, see the detailed documentation:

📖 **[Fix for Issue #10122: Missing Dependencies](./FIX_ISSUE_10122.md)**

The fix addresses:
- Missing `@valibot/to-json-schema` peer dependency
- Missing `effect` peer dependency
- Module resolution warnings during build

## License

Apache License 2.0
