import { Optional, Model } from 'sequelize'

interface UserAttributes {
  userID: number
  email: string
  password: string
}

interface UserCreationAttributes extends Optional<UserAttributes, 'userID'> {}

interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {
  createdAt?: Date
  updatedAt?: Date
}

export { UserAttributes, UserCreationAttributes, UserInstance }
