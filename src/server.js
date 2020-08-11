//Server
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')


//configure nunjucks (engine template)
const nunjucks = require('nunjucks')
const e = require('express')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// server configuration and route call
server.use(express.static("public"))

.use(express.urlencoded({ extended: true }))

//routes of aplication
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//server start
.listen(5500)


