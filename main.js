// @ts-check
// formatting, Linting, Type Checking
// formatting: Prettier
// Linting: ESLint
// Type checking: TypeScript

/* 
const someString = 'Hello'
const result = Math.log(someString)
console.log(result) 
*/

const http = require('http')
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end('Hello!')
})

const PORT = 4000
server.listen(PORT, () => {
    console.log(`server port :${PORT}`)
})