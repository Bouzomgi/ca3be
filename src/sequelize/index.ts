import { Sequelize, Dialect } from 'sequelize'
import env from '../config.js'

import ConversationBuilder from './models/conversation.model.js'
import MessageBuilder from './models/message.model.js'
import ThreadBuilder from './models/thread.model.js'
import UnseenThreadBuilder from './models/unseenThread.model.js'
import UserBuilder from './models/user.model.js'
import UserDetailsBuilder from './models/userDetails.model.js'

import initForeignKeys from './initForeignKeys.js'

const dbConfig = {
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  host: env.DB_HOST,
  logging: env.DB_LOGGING,
  dialect: env.DB_DIALECT as Dialect,
  storage: env.DB_STORAGE_PATH
}

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig
)

const Conversation = ConversationBuilder(sequelize)
const Message = MessageBuilder(sequelize)
const Thread = ThreadBuilder(sequelize)
const UnseenThread = UnseenThreadBuilder(sequelize)
const User = UserBuilder(sequelize)
const UserDetails = UserDetailsBuilder(sequelize)

initForeignKeys()

await sequelize
  .sync({ force: true })
  .then(() => {
    console.log('Models have been synced')
  })
  .catch((err) => {
    console.log('Error syncing models: ' + err)
  })

export {
  sequelize,
  Conversation,
  Message,
  Thread,
  UnseenThread,
  User,
  UserDetails
}
