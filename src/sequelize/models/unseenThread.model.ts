import { Sequelize, DataTypes } from 'sequelize'
import { UnseenThreadInstance } from '../attributes/unseenThreadAttributes'

const UnseenThreadBuilder = (sequelize: Sequelize) =>
  sequelize.define<UnseenThreadInstance>('UnseenThread', {
    threadID: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Threads',
        key: 'threadID'
      }
    }
  })

export default UnseenThreadBuilder
