import { Sequelize, DataTypes } from 'sequelize'
import { MessageInstance } from '../attributes/messageAttributes'

const MessageBuilder = (sequelize: Sequelize) =>
  sequelize.define<MessageInstance>('Message', {
    messageID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    fromUserID: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'userID'
      }
    },
    conversationID: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Conversations',
        key: 'conversationID'
      }
    },
    content: {
      type: DataTypes.STRING(300),
      allowNull: false,
      validate: {
        len: [1, 300]
      }
    }
  })

export default MessageBuilder
