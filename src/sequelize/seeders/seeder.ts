import { sequelize } from '../index'

import insertUserDetails from './baseSeed/insertUserDetails'
import insertUsers from './baseSeed/insertUsers'

class Seeder {
  static up = async () => {
    const queryInterface = sequelize.getQueryInterface()

    await insertUsers(queryInterface)
    await insertUserDetails(queryInterface)
  }

  static down = async () => {
    const queryInterface = sequelize.getQueryInterface()

    await queryInterface.bulkDelete('User', {})
    await queryInterface.bulkDelete('UserDetails', {})
  }
}

export default Seeder
