import { Sequelize, DataTypes } from 'sequelize'
import { ConversationInstance } from '../attributes/conversationAttributes'

const ConversationBuilder = (sequelize: Sequelize) =>
  sequelize.define<ConversationInstance>('Conversation', {
    conversationID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    threadRoot: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true
    }
  })

export default ConversationBuilder
