import { Optional, Model } from 'sequelize'

interface ThreadAttributes {
  threadID: number
  threadRoot: number
  memberID: number
}

interface ThreadCreationAttributes
  extends Optional<ThreadAttributes, 'threadID'> {}

interface ThreadInstance
  extends Model<ThreadAttributes, ThreadCreationAttributes>,
    ThreadAttributes {
  createdAt?: Date
  updatedAt?: Date
}

export { ThreadAttributes, ThreadCreationAttributes, ThreadInstance }
