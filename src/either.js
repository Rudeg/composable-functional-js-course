//const Either = Right || Left

const Right = x => ({
  chain: f => f(x),
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`
})

const Left = x => ({
  chain: f => Left(x),
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`
})

const fromNullable = x =>
 x != null ? Right(x) : Left(null)

const findColor = name =>
  fromNullable({ red: '#ff4444', blue: '#3b5998', yellow: '#fff68f' }[name])

findColor('gg')
  .map(c => c.slice(1))
  .fold(
    e => 'no color',
    c => c.toUpperCase()
  )

const tryCatch = f => {
  try {
    return Right(f())
  } catch (e) {
    return Left(e)
  }
}

const fs = require('fs')

const getPort = () =>
  tryCatch(() => fs.readFileSync('config.json'))
  .chain(c => tryCatch(() => JSON.parse(c)))
  .fold(
    e => 3000,
    c => c.port
  )

const result = getPort()

//console.log(result)

exports.Right = Right
exports.Left = Left
exports.fromNullable = fromNullable

let Either = {}

Either.Left = a => Left(a)
Either.Right = a => Right(a)
Either.fromNullable = fromNullable

module.exports = Either
