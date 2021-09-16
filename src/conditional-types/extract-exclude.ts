// Hover on types to see their results.

type FavoriteColors = 'blue' | 'green' | 'orange' | [number, number, number]

type StringColors = Extract<FavoriteColors, string>

type NonStringColors = Exclude<FavoriteColors, string>

//another example
type Fighter = {
  name: string
  age: number
  mainStyle: string
}

type SimplifiedFighterType = Exclude<keyof Fighter, 'age'>

type SimplifiedFighter = {
  [Key in SimplifiedFighterType]: Fighter[Key]
}

const gsp: SimplifiedFighter = {
  name: 'gsp',
  mainStyle: 'karate',
}
