// Literal types in Typescript are specific types of string, number or boolean.

type Coder = 'Coder'

let coder: Coder
coder = 'Coder' // Good
// error -> coder = 'hi'

type FightingTypes = 'Bjj' | 'Boxing' | 'Wrestling'

let fightingType: FightingTypes

fightingType = 'Bjj'
fightingType = 'Boxing'
// error -> fightingType = 'sleeping'

// keyof operator takes an object type and creates a string or numeric literal union of its keys

interface People {
  name: string
  age: number
  isAdult: boolean
}

type PersonKey = keyof People // will spit out 'name' | 'age' | 'isAdult'

let personKey: PersonKey

personKey = 'name'
// error -> personKey = 'haha'

// typeof operator use case
// If you are consuming a library that exposes some values but doesn't give you the type directly
// You can do ```type ApiResponseType = typeof apiResponse```
