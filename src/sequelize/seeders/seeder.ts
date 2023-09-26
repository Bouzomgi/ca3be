import { sequelize } from '../index.js'

import insertUserDetails from './baseSeed/insertUserDetails.js'
import insertUsers from './baseSeed/insertUsers.js'
import insertConversations from './baseSeed/insertConversations.js'
import insertMessages from './baseSeed/insertMessages.js'
import insertThreads from './baseSeed/insertThreads.js'
import insertUnseenThreads from './baseSeed/insertUnseenThreads.js'

class Seeder {
  static up = async () => {
    const queryInterface = sequelize.getQueryInterface()

    await insertUsers(queryInterface)
    await insertUserDetails(queryInterface)
    await insertConversations(queryInterface)
    await insertMessages(queryInterface)
    await insertThreads(queryInterface)
    await insertUnseenThreads(queryInterface)
  }

  static down = async () => {
    const queryInterface = sequelize.getQueryInterface()

    await queryInterface.bulkDelete('User', {})
    await queryInterface.bulkDelete('UserDetails', {})
    await queryInterface.bulkDelete('Conversation', {})
    await queryInterface.bulkDelete('Message', {})
    await queryInterface.bulkDelete('Thread', {})
    await queryInterface.bulkDelete('UnseenThread', {})
  }
}

export default Seeder
