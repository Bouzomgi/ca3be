import { Optional, Model } from 'sequelize'

interface ConversationAttributes {
  conversationID: number
  threadRoot: number
}

interface ConversationCreationAttributes
  extends Optional<ConversationAttributes, 'conversationID'> {}

interface ConversationInstance
  extends Model<ConversationAttributes, ConversationCreationAttributes>,
    ConversationAttributes {
  createdAt?: Date
  updatedAt?: Date
}

export {
  ConversationAttributes,
  ConversationCreationAttributes,
  ConversationInstance
}
