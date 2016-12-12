const { Map } = require('immutable-ext')
//const res = 'a'.concat('b').concat('c')
//const res = [1,2].concat([3,4]).concat([5,6])

// 1 + 0 // 1
// 2 + 0 // 2
// x + 0 // x

const Sum = x =>
({
  x,
  concat: ({x: y}) =>
    Sum(x + y),
  inspect: () =>
    `Sum(${x})`
})

Sum.empty = () => Sum(0)

const All = x =>
({
  x,
  concat: ({x: y}) =>
    All(x && y),
  inspect: () =>
    `All(${x})`
})

All.empty = () => All(true)

const First = x =>
({
  x,
  concat: _ =>
    First(x),
  inspect: () =>
    `First(${x})`
})


// const res = Sum.empty().concat(Sum(1).concat(Sum(2)))

//true && false // false
//true && true // true

//const res = All(true).concat(All(false)) // false
//const res = First("blah").concat(First("ice cream")) // false

// const acct1 = Map({
//   name: First('Nico'), isPaid: All(true),
//   points: Sum(10), friends: ['Franklin']
// })
// const acct2 = Map({
//   name: First('Nico'), isPaid: All(false),
//   points: Sum(2), friends: ['Gatsby']
// })
//
// const res = acct1.concat(acct2)
const sum = xs =>
  xs.reduce((acc, x) => acc + x, 0)

const all = xs =>
  xs.reduce((acc, x) => acc && x, true)

const first = xs =>
  xs.reduce((acc, x) => acc)


//console.log(res)

exports.Sum = Sum
