import { QueryInterface } from 'sequelize'

const insertConversations = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkInsert(
    'Conversations',
    [
      {
        conversationID: 100,
        threadRoot: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        conversationID: 200,
        threadRoot: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        conversationID: 300,
        threadRoot: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
  )
}

export default insertConversations
