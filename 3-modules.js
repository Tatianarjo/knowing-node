// Modules
// CommonJS, every file is a module (by default)
const sercet = 'SUPER SECRET'
const peaches = 'peaches'
const peter = 'peter'

const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}

sayHi('susan')
sayHi(peaches)
sayHi(peter)