import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { User, UserDetails } from '../sequelize'
import { paths } from '../apiSpecTypes/schema'

const router = express.Router()

router.get('/userInfo', async (req, res) => {
  try {
    const userInformation = await User.findAll({
      include: [
        {
          model: UserDetails,
          required: true
        }
      ]
    })
    res.status(StatusCodes.OK).json(userInformation)
  } catch (err) {
    res.status(StatusCodes.FORBIDDEN).send('Could not make request')
  }
})

router.post('/user', async (req, res) => {
  const body: paths['/user']['post']['requestBody'] = req.body
  try {
    const userInformation = await User.create(body)
    res.status(StatusCodes.CREATED).json(userInformation)
  } catch (err) {
    res.status(StatusCodes.FORBIDDEN).send('Could not make request')
  }
})

router.delete('/user', async (req, res) => {})

export default router
