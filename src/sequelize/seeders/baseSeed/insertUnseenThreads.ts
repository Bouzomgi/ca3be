import { QueryInterface } from 'sequelize'

const insertUnseenThreads = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkInsert(
    'UnseenThreads',
    [
      {
        threadID: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        threadID: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        threadID: 80,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
  )
}

export default insertUnseenThreads
