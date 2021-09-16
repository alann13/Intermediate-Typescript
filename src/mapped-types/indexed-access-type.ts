interface GunSkin {
  name: string
  description: string
  color: {
    red: string
    green: string
  }
}

// index access types must be with bracket notation only.
let gunColor: GunSkin['color']

gunColor = {
  green: 'green',
  red: 'red',
}

// another example
let redGunString: GunSkin['color']['red']

redGunString = 'a red gun'
