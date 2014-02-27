express = require "express"
fs = require "fs"

app = express()
app.get "/music", (req, res) ->
  fs.readFile "data/music.json", (e, data) ->
    res.send JSON.parse(data)

start = () ->
  app.listen 3000
  console.log "Listening on port 3000"

module.exports = {start}
