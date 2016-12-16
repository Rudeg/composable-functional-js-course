const Task = require('data.task')
const Spotify = require('./spotify')
const { List } = require('immutable-ext')

const argv = new Task((rej, res) => res(process.argv))
const names = argv.map(args => args.slice(2))

const Intersection = xs =>
({
  xs,
  concat: ({xs: ys}) =>
    Intersection(
      xs.filter(x => ys.some(y => x === y))
    )
})

const related = name =>
  Spotify.findArtist(name)
  .map(artist => artist.id)
  .chain(Spotify.relatedArtists)
  .map(artists => artists.map(artist => artist.name))

// [1,2,3,4] ^ [3,4,5] = [3,4]

const artistIntersection = rels =>
  rels.foldMap(Intersection).xs

const main = names =>
  List(names)
  .traverse(Task.of, related)
  .map(artistIntersection)

names.chain(main).fork(console.error, console.log)
