const streamjourney = require('workshopper-adventure')({
  appDir:    __dirname,
  languages: ['en'],
  header:    require('workshopper-adventure/default/header'),
  footer:    require('workshopper-adventure/default/footer'),
  fail:      require('workshopper-adventure/default/fail'),
  pass:      require('workshopper-adventure/default/pass')
})

streamjourney.addAll([])

module.exports = streamjourney
