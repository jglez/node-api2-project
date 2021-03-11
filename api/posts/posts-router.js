/***** THIS IS OUR POSTS ROUTER *****/

// Import Express from node_modules
const express = require('express')

// Instantiate our Router using express.Router()
const router = express.Router()

// Pull in the model for our Posts resource
// so we can use the database access helper functions
const Post = require('./posts-model')

/***** POST ENDPOINTS *****/
router.get('/', (req, res) => {
  Post.find()
    .then(post => {
      res.status(200).json(post)
    })
    .catch(err => {
      res.status(500).json({ message: err.message })
    })
})

// Expose our router to the outer world
module.exports = router