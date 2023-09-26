import { QueryInterface } from 'sequelize'

const insertThreads = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkInsert(
    'Threads',
    [
      {
        threadRoot: 1,
        memberID: 1,
        threadID: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        threadRoot: 1,
        memberID: 2,
        threadID: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        threadRoot: 1,
        memberID: 3,
        threadID: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        threadRoot: 2,
        memberID: 1,
        threadID: 60,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        threadRoot: 2,
        memberID: 2,
        threadID: 70,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        threadRoot: 3,
        memberID: 1,
        threadID: 80,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        threadRoot: 3,
        memberID: 3,
        threadID: 90,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
  )
}

export default insertThreads
