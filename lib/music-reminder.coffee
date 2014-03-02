express = require "express"

app = express()

app.get "/", (req, res) ->
  res.sendfile "client/music-reminder.html"

app.get "/music-reminder.js", (req, res) ->
  res.sendfile "client/music-reminder.js"

app.get "/music", (req, res) ->
  res.sendfile "data/music.json"

start = () ->
  app.listen 3000
  console.log "Listening on port 3000"

module.exports = {start}
