// Import Express from node_modules
const express = require('express')

// Import database access helper functions
const Post = require('./posts/posts-model')

// Instantiate Server
const server = express()

// Teach Express how to parse JSON bodies
server.use(express.json())

/***** ENDPOINTS *****/
server.get('/api/posts', (req, res) => {
  Post.find()
    .then(post => {
      res.status(200).json(post)
    })
    .catch(err => {
      res.status(500).json({ message: err.message })
    })
})

// Expose to the outer world
module.exports = server