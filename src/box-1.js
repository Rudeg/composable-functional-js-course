// const nextCharForNumberStr = str => {
//   const trimmed = str.trim()
//   const number = parseInt(str)
//   const nextNumber = number + 1
//   return String.fromCharCode(nextNumber)
// }

const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`
})

const LazyBox = g =>
({
  fold: f => f(g()),
  map: f => LazyBox(() => f(g()))
})

const nextCharForNumberStr = str =>
  LazyBox(() => str)
  .map(s => s.trim())
  .map(s => parseInt(s))
  .map(i => i + 1)
  .map(i => String.fromCharCode(i))
  //.fold(c => c.toLowerCase())

const result = nextCharForNumberStr('   64 ')

console.log(result)
