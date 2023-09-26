import {
  User,
  UserDetails,
  Conversation,
  Message,
  Thread,
  UnseenThread
} from './index.js'

const initForeignKeys = () => {
  // Users
  User.hasOne(UserDetails, {
    foreignKey: 'userDetailsID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })

  User.hasMany(Message, {
    foreignKey: 'fromUserID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })

  User.hasMany(Thread, {
    foreignKey: 'memberID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })

  // Conversations
  Conversation.hasMany(Message, {
    foreignKey: 'conversationID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })

  Conversation.hasOne(Thread, {
    foreignKey: 'threadRoot',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })

  // Threads
  Thread.hasOne(UnseenThread, {
    foreignKey: 'threadID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })

  console.log('Initialized foreign keys')
}

export default initForeignKeys
