import { QueryInterface } from 'sequelize'

const insertUsers = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkInsert(
    'Users',
    [
      {
        userID: 1,
        email: 'a@a.com',
        password:
          '$2b$10$Y5e5a8lkB53tsY985u816O1FjRLXE3bih.CVUU.fjGIogUm2.aUgi', // unhashed is "a"
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userID: 2,
        email: 'b@b.com',
        password:
          '$2b$10$xGUwFpcRE1T02Qk2hIQf7.o7Xwpm2jDgDmy8zp1OUNZtmQ.DvqQTS', // unhashed is "b"
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userID: 3,
        email: 'c@c.com',
        password:
          '$2b$10$EBUlxNOGG2QBpcouyjg5c.qmwZ9g1cnIM5mI6cla9rf1qUfTdm/me', // unhashed is "c"
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
  )
}

export default insertUsers
