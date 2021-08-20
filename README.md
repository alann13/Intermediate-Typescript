# Intermediate Typescript, v3 Courses

This repo hosts code/notes taken from the course https://frontendmasters.com/courses/intermediate-typescript/

## Study Resources

- https://www.typescript-training.com/
- https://www.typescriptlang.org/docs/

<details>
  <summary>Code Infrastructure</summary>

- Declaration merging: You can export the same named types and export it from a file. See `src/declarationMergingExample.ts`.
- namespace keyword is for describing existing javascript libraries. (outdated way of writing code.) They are really about backwards compatibility.
- Protip: write new code through esmodules.
- Protip: if `esModuleInterop` and `allowSyntheticDefaultImports` are enabled, anyone who depends on your types must enable them also.
- importing non ts things stuff, have a file on root called `global.d.ts` and see example inside.
</details>

<details>
  <summary>Conditional Types</summary>

- `keyof` type query allows us to obtain type representing all property keys on a given interface.
- `typeof` type query allows you to extract a type from a value.
- See `conditionalTypesExample.ts` for a ternary types.
- Mental model for `extends`, 64 extends number >> does everything on the left fits everything on the right?
- See `extract-excludeExample.ts` for Extract and Exclude keyword example.
</details>
