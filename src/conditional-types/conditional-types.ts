class Grill {
  startGas() {}
  stopGas() {}
}

class Oven {
  setTemperature(degrees: number) {}
}

type CookingDevice<T> = T extends 'grill' ? Grill : Oven

let device1: CookingDevice<'grill'>

device1 = new Grill()
// error -> device1 = new Oven()

let device2: CookingDevice<'oven'>

device2 = new Oven()
// error -> device2 = new Grill()
