const db = require('./db');
const { User } = require('./models');

const seed = async () => {
  await db.sync({ force: true });
  console.log('db synced!');

  const [alfred, barbara, carol, derrick] = await Promise.all([
    User.create({
      email: 'alfred@example.com',
      password: '12345',
      firstName: 'Alfred',
      lastName: 'Example'
    }),
    User.create({
      email: 'barbara@example.com',
      password: '12345',
      firstName: 'Barbara',
      lastName: 'Example'
    }),
    User.create({
      email: 'carol@example.com',
      password: '12345',
      firstName: 'Carol',
      lastName: 'Example'
    }),
    User.create({
      email: 'derrick@example.com',
      password: '12345',
      firstName: 'Derrick',
      lastName: 'Example'
    })
  ]);

  const today = new Date();

  await Promise.all([
    alfred.createAppointment({
      time: today.setDate(today.getDate() + 7),
      location: 'Oasis'
    }),
    barbara.createAppointment({
      time: today.setDate(today.getDate() + 3),
      location: 'Java'
    }),
    carol.createAppointment({
      time: today.setDate(today.getDate() + 5),
      location: 'Ruby'
    }),
    derrick.createAppointment({
      time: today.setDate(today.getDate() + 1),
      location: 'Hallway'
    })
  ]);
};

(async () => {
  try {
    await seed();
  } catch (err) {
    console.error(err);
  } finally {
    db.close();
  }
})();
