const add = (x) => (y => x + y)

const inc = add(1)

const modulo = dvr => dvd => dvd % dvr

const isOdd = modulo(2)

const filter = pred => xs => xs.filter(pred)
const map = f => xs => xs.map(f)

const getAllOdds = filter(isOdd)

const replace = regex => repl => str =>
  str.replace(regex, repl)

const censor = replace(/[aeiou]/ig)('*')
const censorAll = map(censor)

const res = censorAll(['hello', 'world'])

console.log(res)
