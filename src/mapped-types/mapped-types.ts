type Fruit = {
  name: string
  color: string
  mass: number
}

type ArbitraryRecord = { [k: string]: Fruit } // object with any prop key can fit a Fruit type

type MyRecord = { [Fruitkey in 'apple' | 'cherry']: Fruit } // only apple and cherry prop exist in this type.

// better way to make our types more generalized with some type params
// Here we build a type with a set of known keys with a consistent value type.
type BetterRecord<KeyType extends string, ValueType> = {
  [Key in KeyType]: ValueType
}

// If you want to create a partial type from another type,

// Our full type here
type LegitType = {
  id: number
  name: string
  description: string
  isCompleted: boolean
}

// As we know keyof operator produces a string or numeric literal union of its keys.
type PartialBuilder<ValueType, Keys extends keyof ValueType> = {
  [key in Keys]: ValueType[key]
}

// The partial is here
type PartOfLegitType = PartialBuilder<LegitType, 'id' | 'name'>
