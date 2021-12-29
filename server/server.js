const fastify = require('fastify')({ logger: true })
const swagger = require('./config/swagger')

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)


fastify.register(require('fastify-cors'), {
  origin:'*',
  credentials: true
})



const authorRoutes = require('./routes/authors')
authorRoutes.forEach((route, index) => {
    fastify.route(route)
})

const commentRoutes = require('./routes/comments')
commentRoutes.forEach((route, index) => {
    fastify.route(route)
})

const bookRoutes = require('./routes/books')
bookRoutes.forEach((route, index) => {
    fastify.route(route)
})


// modules
const mongoose = require('mongoose')

// db connect
mongoose.connect('mongodb://localhost/Library')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))
  

// Run the server
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.swagger()
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()