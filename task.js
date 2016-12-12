const Task = require('data.task')

const launchMissiles = () =>
  new Task((rej, res) => {
    console.log('launch missiles!')
    res('missiles')
  })

launchMissiles() // Task(1)
.map(x => x + '!')
.fork(
  e => console.log('err', e),
  x => console.log('success', x)
)
