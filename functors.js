const { Box } = require('./4_box')
const Task = require('data.task')
const { Right, Left, fromNullable } = require('./5_eigher')
const { Map, List } = require('immutable-ext')


//fx.map(f).map(g) = fx.map(x => g(f(x)))
//fx.map(id) => id(fx)

// const res1 = Left('squirrels')
//   .map(s => s.substr(5))
//   .map(s => s.toUpperCase())

// const res2 = Left('squirrels')
//   .map(s => s.substr(5).toUpperCase())

// const id = x => x
//
// const res1 = Box('crayons').map(id)
// const res2 = id(Box('crayons'))

// const add = x => y => y + x

// const res = Box(add)
//   .ap(Box(2))
//   .ap(Box(3)) // Box(2 + y)

//F(x).map(f) == F(f).ap(F(x))

//const res = lift2(add, Box(2), Box(4))


const lift2 = (f, fx, fy) =>
  fx.map(f).ap(fy)

const $ = selector =>
  Either.of({selector, height: 10})

const getScreenSize = (screen, head, foot) =>
  screen - (head.height + foot.height)

const res = lift2(getScreenSize(800), $('header'), $('footer'))

console.log(res)

$('header').chain(head =>
  $('footer').map(footer =>
    getScreenSize(800, head, footer)))
