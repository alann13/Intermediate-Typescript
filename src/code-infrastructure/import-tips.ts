// You can support namespace import with example below
// import * as allBerries from './berries'

// -----------------------------------------------------------------

function createBanana() {
  return { name: 'banana', color: 'yellow', mass: 183 }
}

export = createBanana
// you can import those with the following syntax import createBanana = require('./filename)
