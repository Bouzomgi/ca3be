import { Sequelize, DataTypes } from 'sequelize'
import { UserInstance } from '../attributes/userAttributes'

const UserBuilder = (sequelize: Sequelize) =>
  sequelize.define<UserInstance>('User', {
    userID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        len: [5, 20]
      }
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false
    }
  })

export default UserBuilder
