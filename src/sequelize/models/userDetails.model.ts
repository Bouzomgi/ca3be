import { Sequelize, DataTypes } from 'sequelize'
import { UserDetailsInstance } from '../attributes/userDetailsAttributes'

const UserDetailsBuilder = (sequelize: Sequelize) =>
  sequelize.define<UserDetailsInstance>('UserDetails', {
    userDetailsID: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Users',
        key: 'userID'
      }
    },
    username: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 20]
      }
    },
    bio: {
      type: DataTypes.STRING(300),
      defaultValue: '',
      validate: {
        len: [0, 300]
      }
    },
    avatar: {
      type: DataTypes.STRING(64),
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    }
  })

export default UserDetailsBuilder
