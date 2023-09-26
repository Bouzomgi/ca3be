import { Optional, Model } from 'sequelize'

interface UnseenThreadAttributes {
  threadID: number
}

interface UnseenThreadCreationAttributes
  extends Optional<UnseenThreadAttributes, 'threadID'> {}

interface UnseenThreadInstance
  extends Model<UnseenThreadAttributes, UnseenThreadCreationAttributes>,
    UnseenThreadAttributes {
  createdAt?: Date
  updatedAt?: Date
}

export {
  UnseenThreadAttributes,
  UnseenThreadCreationAttributes,
  UnseenThreadInstance
}
