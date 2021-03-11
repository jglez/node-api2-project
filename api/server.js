// Import Express from node_modules
const express = require('express')

/** Import Posts Router **/
const postsRouter = require('./posts/posts-router')

// Instantiate Server
const server = express()

// Teach Express how to parse JSON bodies
server.use(express.json())

/** Use our Posts Router **/
server.use('/api/posts', postsRouter)

// Expose to the outer world
module.exports = server