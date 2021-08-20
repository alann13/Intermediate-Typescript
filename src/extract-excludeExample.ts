type FavoriteColors = 'blue' | 'green' | 'orange' | [number, number, number]

type StringColors = Extract<FavoriteColors, string>

type NonStringColors = Exclude<FavoriteColors, string>
