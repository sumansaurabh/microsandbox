# Fix for GitHub Issue #10122: Missing Dependencies in AI SDK v6 Beta

## Issue Summary

**Issue:** [vercel/ai#10122](https://github.com/vercel/ai/issues/10122)
**Title:** (v6) Missing dependencies @valibot/to-json-schema and effect

### Problem Description

After upgrading to AI SDK v6 beta, users encountered "Module not found" warnings during the build process:

```
Module not found: Can't resolve 'effect'
Module not found: Can't resolve '@valibot/to-json-schema'
```

These warnings occurred in the `@ai-sdk/provider-utils` package when it attempted to dynamically import these libraries for schema conversion and error handling functionality.

## Root Cause

The `@ai-sdk/provider-utils` package uses dynamic imports for optional schema validation libraries:

1. **`effect`** - Used for functional error handling and composability
2. **`@valibot/to-json-schema`** - Used to convert Valibot schemas to JSON Schema format for LLM function calling

These packages were used in the code but were not declared as peer dependencies, causing module resolution warnings even though the application might function correctly with try-catch fallbacks.

## Solution

The fix involves declaring these packages as **optional peer dependencies** in the package.json:

### 1. Add Peer Dependencies

```json
{
  "peerDependencies": {
    "@valibot/to-json-schema": "^1.0.0",
    "effect": "^3.0.0"
  },
  "peerDependenciesMeta": {
    "@valibot/to-json-schema": {
      "optional": true
    },
    "effect": {
      "optional": true
    }
  }
}
```

### 2. Add as Dev Dependencies (for development/testing)

```json
{
  "devDependencies": {
    "@valibot/to-json-schema": "^1.0.0",
    "effect": "^3.10.0",
    "valibot": "^0.42.0"
  }
}
```

## Why Optional Peer Dependencies?

These are marked as **optional** because:

1. **Not all users need these features** - Only users who use Valibot schemas for structured data generation need `@valibot/to-json-schema`
2. **Graceful degradation** - The AI SDK code includes fallback logic when these packages are not available
3. **Reduced bundle size** - Users who don't need these features won't be forced to install them
4. **Flexibility** - Different projects may use different schema validation libraries (Zod, Yup, etc.)

## How This Fix Helps

### Before the Fix
```
⚠️ Module not found: Can't resolve 'effect'
⚠️ Module not found: Can't resolve '@valibot/to-json-schema'
Build completes but with warnings
```

### After the Fix
```
✓ All peer dependencies properly declared
✓ Package managers can resolve optional dependencies
✓ No warnings during build
✓ Clear documentation for users about what's needed
```

## Usage Example

Once these dependencies are installed, you can use Valibot schemas with AI SDK:

```typescript
import { generateObject } from 'ai';
import { openai } from '@ai-sdk/openai';
import * as v from 'valibot';
import { valibotSchema } from '@ai-sdk/provider-utils';

// Define your schema with Valibot
const RecipeSchema = v.object({
  name: v.string(),
  ingredients: v.array(v.string()),
  steps: v.array(v.string()),
  prepTime: v.number()
});

// Use it with AI SDK
const result = await generateObject({
  model: openai('gpt-4'),
  schema: valibotSchema(RecipeSchema),
  prompt: 'Generate a recipe for chocolate chip cookies'
});

console.log(result.object);
```

## Testing the Fix

Run the example to see the dependencies in action:

```bash
cd sdk/javascript
npm install
npm run example:schema-validation
```

This example demonstrates:
- Converting Valibot schemas to JSON Schema
- Using Effect for error handling
- Combined usage patterns

## Installation Instructions

For projects using AI SDK v6 with Valibot:

```bash
npm install valibot @valibot/to-json-schema effect
```

Or with pnpm:

```bash
pnpm add valibot @valibot/to-json-schema effect
```

Or with yarn:

```bash
yarn add valibot @valibot/to-json-schema effect
```

## Package Versions

The following versions are recommended:

| Package | Version | Purpose |
|---------|---------|---------|
| `valibot` | ^0.42.0 | Schema validation library |
| `@valibot/to-json-schema` | ^1.0.0 | Convert Valibot schemas to JSON Schema |
| `effect` | ^3.10.0 | Functional error handling |

## Benefits of This Approach

1. **✅ Eliminates build warnings** - Proper peer dependency declaration resolves module not found errors
2. **✅ Better DX** - Package managers warn users about missing optional dependencies
3. **✅ Automatic documentation** - `peerDependencies` serve as API documentation
4. **✅ Version constraints** - Ensures compatible versions are installed
5. **✅ Tree-shaking friendly** - Optional dependencies can be excluded from bundles when not needed

## Related Documentation

- [Valibot Documentation](https://valibot.dev/)
- [Effect Documentation](https://effect.website/)
- [AI SDK Structured Data Guide](https://ai-sdk.dev/docs/ai-sdk-core/generating-structured-data)
- [npm Peer Dependencies](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#peerdependencies)

## Implementation Details

### Dynamic Import Pattern

The AI SDK uses this pattern for optional dependencies:

```typescript
try {
  // Try to dynamically import the library
  const { toJSONSchema } = await import('@valibot/to-json-schema');
  return toJSONSchema(schema);
} catch (error) {
  // Fallback if library is not installed
  throw new Error('Please install @valibot/to-json-schema');
}
```

With proper peer dependencies declared, package managers can:
- Detect when the library should be installed
- Provide helpful warnings to developers
- Ensure compatible versions are used

## Migration Guide

If you're upgrading from AI SDK v5 to v6 and using Valibot:

### Step 1: Update AI SDK packages
```bash
npm install ai@6.0.0-beta.95 @ai-sdk/react@3.0.0-beta.95
```

### Step 2: Install missing peer dependencies
```bash
npm install @valibot/to-json-schema effect
```

### Step 3: Verify your schemas work
```typescript
import { valibotSchema } from '@ai-sdk/provider-utils';

// Your existing Valibot schemas should work unchanged
const result = await generateObject({
  schema: valibotSchema(YourExistingSchema),
  // ... rest of config
});
```

## Troubleshooting

### Issue: Still seeing warnings after installing packages

**Solution:** Clear your build cache
```bash
rm -rf node_modules .next
npm install
npm run build
```

### Issue: Type errors with Effect

**Solution:** Ensure TypeScript is properly configured
```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "strict": true
  }
}
```

### Issue: Runtime errors about missing modules

**Solution:** Verify packages are in `dependencies`, not just `devDependencies`
```bash
npm install --save @valibot/to-json-schema effect
```

## Contributing

If you encounter issues with these dependencies, please:

1. Check the [AI SDK GitHub Issues](https://github.com/vercel/ai/issues)
2. Verify you're using compatible versions
3. Report bugs with reproduction steps

## License

This fix follows the same license as the AI SDK project (Apache 2.0).

---

**Last Updated:** 2025-11-10
**Status:** ✅ Fix Implemented
**Tested With:**
- ai@6.0.0-beta.95
- @ai-sdk/react@3.0.0-beta.95
- valibot@0.42.0
- @valibot/to-json-schema@1.0.0
- effect@3.10.0
