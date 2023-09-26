import { QueryInterface } from 'sequelize'

const insertMessages = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkInsert(
    'Messages',
    [
      {
        messageID: 1,
        fromUserID: 1,
        content: 'Bug',
        conversationID: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        messageID: 2,
        fromUserID: 1,
        content: 'Mat',
        conversationID: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        messageID: 3,
        fromUserID: 1,
        content: 'Cup',
        conversationID: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        messageID: 4,
        fromUserID: 1,
        content: 'Bat',
        conversationID: 300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        messageID: 5,
        fromUserID: 2,
        content: 'Ham',
        conversationID: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        messageID: 6,
        fromUserID: 3,
        content: 'Dog',
        conversationID: 300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        messageID: 7,
        fromUserID: 3,
        content: 'Cat',
        conversationID: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
  )
}

export default insertMessages
