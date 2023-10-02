import express, { Router } from 'express'
import env from './config.js'
import { sequelize } from './sequelize/index.js'
import swaggerDocs from './utils/swagger.js'

const app = express()
const router = Router()

// MIDDLEWARES
app.use('/backend', router)

// ROUTES
router.get('/', (req, res) => {
  res.send('Hit the backend!')
})

router.get('/health', (req, res) => {
  res.send('Working fine!')
})

router.get('/random', (req, res) => {
  const randomInteger = Math.floor(Math.random() * 100000)
  res.send(`${randomInteger}`)
})

// Ensure the Database is running
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.')
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })

const server = app.listen(env.PORT, () => {
  console.log(`App listening on port ${env.PORT}`)

  // Spins up OpenAPI docs route if running locally
  if (env.NODE_ENV == 'development') {
    swaggerDocs(app, '/backend/docs', env.PORT)
  }
})

export default server
