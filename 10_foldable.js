const { Map, List } = require('immutable-ext')
const { Sum } = require('./monoid')

const res = Map({ brian: 3, sara: 5 })
            .foldMap(Sum, Sum.empty())
            //.reduce((acc, x) => acc.concat(x), Sum.empty())

console.log(res)
