const { Box } = require('./4_box')
const Task = require('data.task')
const Either = require('./5_eigher')

// of

Task.of('hello') // Task('hello')
Either.of('hello') // Right('hello')
