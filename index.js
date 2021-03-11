// Import server from server.js
const server = require('./api/server')

server.listen(5000, () => {
  console.log('Server running on http://localhost:5000')
})

// require your posts router and connect it here
