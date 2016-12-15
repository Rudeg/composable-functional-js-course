const Box = x => ({
  ap: b2 => b2.map(x),
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`,
  chain: f => f(x)
})

const moneyToFloat = str =>
  Box(str)
  .map(s => s.replace(/\$/g, ''))
  .map(r => parseFloat(r))

const percentToFlaot = str =>
  Box(str.replace(/\%/g, ''))
  .map(r => parseFloat(r))
  .map(n => n * 0.01)

const applyDiscount = (price, discount) =>
  moneyToFloat(price)
  .fold(cost =>
    percentToFlaot(discount)
    .fold(savings =>
      cost - cost * savings
    )
  )

const result = applyDiscount('$5.00', '20%')

//console.log(result)

exports.Box = Box
