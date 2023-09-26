import { Optional, Model } from 'sequelize'

interface UserDetailsAttributes {
  userDetailsID: number
  username: string
  bio: string
  avatar: string
}

interface UserDetailsCreationAttributes
  extends Optional<UserDetailsAttributes, 'userDetailsID'> {}

interface UserDetailsInstance
  extends Model<UserDetailsAttributes, UserDetailsCreationAttributes>,
    UserDetailsAttributes {
  createdAt?: Date
  updatedAt?: Date
}

export {
  UserDetailsAttributes,
  UserDetailsCreationAttributes,
  UserDetailsInstance
}
