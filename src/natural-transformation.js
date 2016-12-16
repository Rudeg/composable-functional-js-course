const Either = require('./either')
const { Right, Left, fromNullable } = Either
const { Box } = require('./box')
const Task = require('data.task')

// nt(x).map(f) == nt(x.map(f))

const first = xs =>
  fromNullable(xs[0])

const res1 = first([1,2,3]).map(x => x * 2)
const res2 = first([1,2,3].map(x => x * 2))
console.log(res1, res2)


const boxToEither = b =>
  b.fold(Right)

const eitherToTask = e =>
  e.fold(Task.rejected, Task.of)

eitherToTask(Left('errrrrr'))
  .fork(e => console.error('err', e),
        r => console.log('res', r))
