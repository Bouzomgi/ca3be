import { User, UserDetails } from './index.js'

const initForeignKeys = () => {
  // Users
  User.hasOne(UserDetails, {
    foreignKey: 'userDetailsID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })

  console.log('Initialized foreign keys')
}

export default initForeignKeys
