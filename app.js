// Modules
// CommonJS, every file is a module (by default)

const names = require('./4-names')
const sayHi = require('./5-utils')

// console.log(names)
sayHi('susan')
sayHi(names.peaches)
sayHi(names.peter)