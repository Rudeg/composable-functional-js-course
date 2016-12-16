const { Box } = require('./box')
const Task = require('data.task')
const Either = require('./eigher')

// of

Task.of('hello') // Task('hello')
Either.of('hello') // Right('hello')
