import { Sequelize, DataTypes } from 'sequelize'
import { ThreadInstance } from '../attributes/threadAttributes'

const ThreadBuilder = (sequelize: Sequelize) =>
  sequelize.define<ThreadInstance>(
    'Thread',
    {
      threadID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      threadRoot: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Conversations',
          key: 'threadRoot'
        }
      },
      memberID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'userID'
        }
      }
    },
    {
      indexes: [
        {
          fields: ['threadID', 'memberID'],
          unique: true
        }
      ]
    }
  )

export default ThreadBuilder
