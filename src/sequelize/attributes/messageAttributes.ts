import { Optional, Model } from 'sequelize'

interface MessageAttributes {
  messageID: number
  fromUserID: number
  conversationID: number
  content: string
}

interface MessageCreationAttributes
  extends Optional<MessageAttributes, 'messageID'> {}

interface MessageInstance
  extends Model<MessageAttributes, MessageCreationAttributes>,
    MessageAttributes {
  createdAt?: Date
  updatedAt?: Date
}

export { MessageAttributes, MessageCreationAttributes, MessageInstance }
