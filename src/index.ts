import express from 'express'
import env from './config.js'
import { sequelize } from './sequelize/index.js'

const router = express.Router()
const app = express()

// MIDDLEWARES

// ROUTES
router.get('/', (req, res) => {
  res.send('go to bed chick en nugget')
})

router.get('/random', (req, res) => {
  const randomInteger = Math.floor(Math.random() * 100000)
  res.send(`${randomInteger}`)
})

app.use('/backend', router)

// Ensure the Database is running
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })

const server = app.listen(env.PORT, () => {
  console.log(`App listening on port ${env.PORT}`)
})

export default server
