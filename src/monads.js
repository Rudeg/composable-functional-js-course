const { Box } = require('./box')

// Box, Either, Task, List
// F.of, chain (flatMap, bind, >>=)

// httpGet('/user')
// .chain(user =>
//   httpGet(`/comments/${user.id}`) // Task([Comment])
//   .chain(comments =>
//     updateDOM(user, comments))) // Task(Task(DOM))

const join = m =>
  m.chain(x => x)

// const m = Box(Box(Box(3)))
// const res1 = join(m.map(join))
// const res2 = join(join(m))

const m = Box('wonder')
const res1 = join(Box.of(m))
const res2 = join(m.map(Box.of))

console.log(res1, res2)
