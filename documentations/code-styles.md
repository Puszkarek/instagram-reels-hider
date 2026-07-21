# Code Style Guidelines

## Naming Conventions

### Public/Private Modifiers
- Always use explicit `public` and `private` modifiers on class methods
- Example: `public process()` and `private _hideReels()`

### Private Properties
- All private class properties must use underscore prefix
- Example: `private _theme: Theme | null = null;`

### Private Methods
- All private methods must use underscore prefix
- Example: `private _initializeTheme()`

## File Organization

### Interfaces
- All interfaces should be in `src/interfaces/`
- One interface per file when possible
- Example: `src/interfaces/theme.ts`

### Constants
- Constants should be in `src/constants/`
- Example: `src/constants/config.ts`

### Utilities
- Utility functions should be in `src/utils/`
- Example: `src/utils/helpers.ts`

### Services
- Services (singletons, shared state) should be in `src/services/`
- Example: `src/services/theme-service.ts`

## Logging

- **No `console.log` statements** in production code
- Only use `console.error` for error logging
- Keep error messages descriptive and context-aware

## Patterns

TODO

## TypeScript Best Practices

- Avoid non-null assertions (`!`) - handle null cases properly
- Use type imports for cleaner code: `import type { Theme } from ...`
- Remove unused parameters instead of prefixing with underscore
