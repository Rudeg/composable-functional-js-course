const fs = require('fs')
const Task = require('data.task')
const futurize = require('futurize').futurize(Task)
const { List } = require('immutable-ext')

const readFile = futurize(fs.readFile)

const files = List(['3_box.js', 'config.json'])
  .traverse(
    Task.of,
    fn => readFile(fn, 'utf-8')
  ).fork(console.error, console.log)

//[Task] => Task([])
//console.log(res)
