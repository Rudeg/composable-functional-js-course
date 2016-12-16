const { List } = require('immutable-ext')

// for(x in xs) {
//   for(y in ys) {
//     for (z in zs) {
//
//     }
//   }
// }

//const res = List.of(x => y => ``).ap(List([1,2,3]))

const merch = () =>
  List.of(x => y => z => `${x}-${y}-${z}`)
  .ap(List(['teeshirt', 'sweater']))
  .ap(List(['large', 'medium', 'small']))
  .ap(List(['black']))

const res = merch()
console.log(res)
