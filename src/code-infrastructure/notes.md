# Code Infrastructure

- Declaration merging: You can export the same named types and export it from a file. See `src/declarationMergingExample.ts`.
- namespace keyword is for describing existing javascript libraries. (outdated way of writing code.) They are really about backwards compatibility.
- Protip: write new code through esmodules.
- Protip: if `esModuleInterop` and `allowSyntheticDefaultImports` are enabled, anyone who depends on your types must enable them also.
- importing non ts things stuff, have a file on root called `global.d.ts` and see example inside.
