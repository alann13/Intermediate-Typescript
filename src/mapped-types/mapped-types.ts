type Fruit = {
  name: string
  color: string
  mass: number
}

type ArbitraryRecord = { [k: string]: Fruit } // object with any prop key can fit a Fruit type
type MyRecord = { [Fruitkey in 'apple' | 'cherry']: Fruit } // only apple and cherry prop exist in this type.
