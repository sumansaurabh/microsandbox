/**
 * Example demonstrating the fix for GitHub Issue #10122
 *
 * This example shows how to properly use @valibot/to-json-schema and effect
 * libraries that were missing as peer dependencies in AI SDK v6 beta.
 *
 * Issue: https://github.com/vercel/ai/issues/10122
 *
 * The issue was that @ai-sdk/provider-utils attempted to dynamically import
 * these packages but they weren't declared as peer dependencies, causing
 * "Module not found" warnings during build.
 */

import * as v from 'valibot';
import { toJSONSchema } from '@valibot/to-json-schema';
import { Effect, Console } from 'effect';

/**
 * Example 1: Using Valibot with JSON Schema conversion
 * This is the type of operation that AI SDK's provider-utils performs
 * when converting schemas for LLM function calling
 */
function exampleValibotSchemaConversion() {
  console.log('\n=== Example 1: Valibot Schema to JSON Schema ===\n');

  // Define a Valibot schema for user data
  const UserSchema = v.object({
    name: v.string(),
    email: v.pipe(v.string(), v.email()),
    age: v.optional(v.number()),
    role: v.picklist(['admin', 'user', 'guest']),
  });

  // Convert to JSON Schema (this is what AI SDK does internally)
  const jsonSchema = toJSONSchema(UserSchema);

  console.log('Valibot Schema converted to JSON Schema:');
  console.log(JSON.stringify(jsonSchema, null, 2));

  // Validate some data
  const validData = {
    name: 'John Doe',
    email: 'john@example.com',
    age: 30,
    role: 'user' as const
  };

  const result = v.safeParse(UserSchema, validData);
  console.log('\nValidation result:', result.success ? 'Valid' : 'Invalid');
  if (result.success) {
    console.log('Parsed data:', result.output);
  }
}

/**
 * Example 2: Using Effect for error handling
 * The AI SDK uses Effect for advanced error handling and composability
 */
function exampleEffectErrorHandling() {
  console.log('\n=== Example 2: Effect-based Error Handling ===\n');

  // Simulate a schema validation operation that might fail
  const validateSchema = (data: unknown): Effect.Effect<string, Error> => {
    return Effect.try({
      try: () => {
        if (typeof data !== 'object' || data === null) {
          throw new Error('Data must be an object');
        }
        return 'Schema validation successful';
      },
      catch: (error) => new Error(`Validation failed: ${error}`)
    });
  };

  // Run the effect
  const program = Effect.gen(function* () {
    yield* Console.log('Starting schema validation...');
    const result = yield* validateSchema({ name: 'test' });
    yield* Console.log(result);
    return result;
  });

  // Execute the effect
  Effect.runPromise(program)
    .then(() => console.log('Effect execution completed'))
    .catch((error) => console.error('Effect execution failed:', error));
}

/**
 * Example 3: Combined usage - Valibot + Effect
 * This demonstrates how AI SDK combines both libraries for robust schema handling
 */
async function exampleCombinedUsage() {
  console.log('\n=== Example 3: Combined Valibot + Effect Usage ===\n');

  // Define a schema for AI function parameters
  const FunctionParamsSchema = v.object({
    query: v.string(),
    maxResults: v.optional(v.number()),
    filters: v.optional(v.array(v.string()))
  });

  // Create an Effect that validates and converts the schema
  const processSchema = Effect.gen(function* () {
    yield* Console.log('Converting schema to JSON Schema format...');

    const jsonSchema = toJSONSchema(FunctionParamsSchema);
    yield* Console.log('Conversion successful!');

    // Validate sample data
    const sampleData = {
      query: 'search term',
      maxResults: 10,
      filters: ['active', 'verified']
    };

    const validation = v.safeParse(FunctionParamsSchema, sampleData);

    if (!validation.success) {
      yield* Effect.fail(new Error('Validation failed'));
    }

    yield* Console.log('Sample data validated successfully');

    return {
      schema: jsonSchema,
      validatedData: validation.output
    };
  });

  try {
    const result = await Effect.runPromise(processSchema);
    console.log('\nFinal result:');
    console.log('JSON Schema:', JSON.stringify(result.schema, null, 2));
    console.log('Validated data:', result.validatedData);
  } catch (error) {
    console.error('Error:', error);
  }
}

/**
 * Main function to run all examples
 */
async function main() {
  console.log('=====================================');
  console.log('GitHub Issue #10122 - Fix Demonstration');
  console.log('Missing dependencies: @valibot/to-json-schema and effect');
  console.log('=====================================');

  exampleValibotSchemaConversion();
  exampleEffectErrorHandling();

  // Wait a bit for Effect to complete
  await new Promise(resolve => setTimeout(resolve, 100));

  await exampleCombinedUsage();

  console.log('\n=====================================');
  console.log('All examples completed successfully!');
  console.log('=====================================\n');
}

// Run examples if this file is executed directly
if (require.main === module) {
  main().catch(console.error);
}

export { exampleValibotSchemaConversion, exampleEffectErrorHandling, exampleCombinedUsage };
