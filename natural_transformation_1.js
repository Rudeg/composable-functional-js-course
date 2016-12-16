const { List } = require('immutable-ext')

const res = List(['hello', 'world'])
.chain(x => List(x.split('')))

console.log(res)
