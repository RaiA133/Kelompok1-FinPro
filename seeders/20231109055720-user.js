'use strict';
const bcrypt = require("bcrypt");
const { uniqueId } = require('./factory/uniqueId');
const users = uniqueId();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const addAdmin = [
      {
        id: users.user1,
        user_role_id: 1,
        unique_id: users.user1,
        name: 'Raie Aswajjillah',
        username: 'R41iee',
        email: 'rai@gmail.com',
        img_profile: 'default.png',
        password: await bcrypt.hash('123', 10),
        birth_date: '2003-11-23',
        birth_place: 'Bandung',
        about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, nemo? Rerum, quis natus sequi minus magnam, nostrum explicabo vero id quia illo ad voluptate? Vero sint asperiores illo quod itaque.',
        company: 'Rakamin Academy',
        job: 'Fullstack Web Dev',
        country: 'Indonesia',
        city: 'Bandung',
        address: 'Jl. Dago atas No.23',
        contact: '08123456789',
        web_link: 'https://raie-site.link',
        github_link: 'https://github.com/RaiA133',
        fb_link: 'https://www.facebook.com/zuck/?locale=id_ID',
        ig_link: 'https://www.instagram.com/zuck/',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]
    await queryInterface.bulkInsert('Users', addAdmin, {})
    const addUsers = [
      {
        id: users.user2,
        user_role_id: 2,
        unique_id: users.user2,
        name: 'Ikhsan',
        username: 'death_vader32',
        email: 'ikhsan@gmail.com',
        img_profile: 'default.png',
        password: await bcrypt.hash('321', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users.user3,
        user_role_id: 2,
        unique_id: users.user3,
        name: 'Iffat',
        username: 'nbilIffat',
        email: 'nabil@gmail.com',
        img_profile: 'default.png',
        password: await bcrypt.hash('111', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users.user4,
        user_role_id: 2,
        unique_id: users.user4,
        name: 'Jane',
        username: 'janedoe',
        email: 'janedoe123@gmail.com',
        img_profile: 'default.png',
        password: await bcrypt.hash('password123', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users.user5,
        user_role_id: 2,
        unique_id: users.user5,
        name: 'Mike',
        username: 'miketheman',
        email: 'mike@gmail.com',
        img_profile: 'default.png',
        password: await bcrypt.hash('securepass', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users.user6,
        user_role_id: 2,
        unique_id: users.user6,
        name: 'Sarah',
        username: 'sarah123',
        email: 'sarah@gmail.com',
        img_profile: 'default.png',
        password: await bcrypt.hash('sarahpass', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users.user7,
        user_role_id: 2,
        unique_id: users.user7,
        name: 'Alex',
        username: 'alexsmith',
        email: 'alex@gmail.com',
        img_profile: 'default.png',
        password: await bcrypt.hash('alexpass123', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users.user8,
        user_role_id: 2,
        unique_id: users.user8,
        name: 'Emily',
        username: 'emilyrose',
        email: 'emily@gmail.com',
        img_profile: 'default.png',
        password: await bcrypt.hash('emilypass', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users.user9,
        user_role_id: 2,
        unique_id: users.user9,
        name: 'David',
        username: 'davidknight',
        email: 'david@gmail.com',
        img_profile: 'default.png',
        password: await bcrypt.hash('davidpass123', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users.user10,
        user_role_id: 2,
        unique_id: users.user10,
        name: 'Megan',
        username: 'megan_21',
        email: 'megan@gmail.com',
        img_profile: 'default.png',
        password: await bcrypt.hash('meganpass', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users.user11,
        user_role_id: 2,
        unique_id: users.user11,
        name: 'Robert',
        username: 'robertking',
        email: 'robert@gmail.com',
        img_profile: 'default.png',
        password: await bcrypt.hash('robertpass123', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users.user12,
        user_role_id: 2,
        unique_id: users.user12,
        name: 'Sophie',
        username: 'sophie_08',
        email: 'sophie@gmail.com',
        img_profile: 'default.png',
        password: await bcrypt.hash('sophiepass', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users.user13,
        user_role_id: 2,
        unique_id: users.user13,
        name: 'Daniel',
        username: 'daniel_89',
        email: 'daniel@gmail.com',
        img_profile: 'default.png',
        password: await bcrypt.hash('danielpass', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users.user14,
        user_role_id: 2,
        unique_id: users.user14,
        name: 'Ella',
        username: 'ella_22',
        email: 'ella@gmail.com',
        img_profile: 'default.png',
        password: await bcrypt.hash('ellapass', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users.user15,
        user_role_id: 2,
        unique_id: users.user15,
        name: 'Christopher',
        username: 'chris_123',
        email: 'chris@gmail.com',
        img_profile: 'default.png',
        password: await bcrypt.hash('chrispass123', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users.user16,
        user_role_id: 2,
        unique_id: users.user16,
        name: 'Olivia',
        username: 'olivia_girl',
        email: 'olivia@gmail.com',
        img_profile: 'default.png',
        password: await bcrypt.hash('oliviapass', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users.user17,
        user_role_id: 2,
        unique_id: users.user17,
        name: 'Ryan',
        username: 'ryan_coder',
        email: 'ryan@gmail.com',
        img_profile: 'default.png',
        password: await bcrypt.hash('ryanpass123', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users.user18,
        user_role_id: 2,
        unique_id: users.user18,
        name: 'Isabella',
        username: 'isabella_44',
        email: 'isabella@gmail.com',
        img_profile: 'default.png',
        password: await bcrypt.hash('isabellapass', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users.user19,
        user_role_id: 2,
        unique_id: users.user19,
        name: 'Nathan',
        username: 'nathan_90',
        email: 'nathan@gmail.com',
        img_profile: 'default.png',
        password: await bcrypt.hash('nathanpass123', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users.user20,
        user_role_id: 2,
        unique_id: users.user20,
        name: 'Sophia',
        username: 'sophia_dancer',
        email: 'sophia@gmail.com',
        img_profile: 'default.png',
        password: await bcrypt.hash('sophiapass', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users.user21,
        user_role_id: 2,
        unique_id: users.user21,
        name: 'Matthew',
        username: 'matthew_87',
        email: 'matthew@gmail.com',
        img_profile: 'default.png',
        password: await bcrypt.hash('matthewpass123', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users.user22,
        user_role_id: 2,
        unique_id: users.user22,
        name: 'Ava',
        username: 'ava_musician',
        email: 'ava@gmail.com',
        img_profile: 'default.png',
        password: await bcrypt.hash('avapass', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users.user23,
        user_role_id: 2,
        unique_id: users.user23,
        name: 'William',
        username: 'william_55',
        email: 'william@gmail.com',
        img_profile: 'default.png',
        password: await bcrypt.hash('williampass123', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
    ]
    await queryInterface.bulkInsert('Users', addUsers, {})
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
