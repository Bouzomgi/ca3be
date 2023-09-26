import { QueryInterface } from 'sequelize'

const insertUserDetails = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkInsert(
    'UserDetails',
    [
      {
        userDetailsID: 1,
        username: 'Alex',
        bio: 'I like the color blue.',
        avatar: 'avatars/default/male1.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userDetailsID: 2,
        username: 'Britta',
        bio: 'I live in Ohio',
        avatar: 'avatars/default/female1.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userDetailsID: 3,
        username: 'Carl',
        bio: 'I hate Wednesdays',
        avatar: 'avatars/default/male2.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
  )
}

export default insertUserDetails
