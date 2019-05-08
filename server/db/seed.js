const db = require('./db');
const { Appointment, User } = require('./models');

const seed = async () => {
  await db.sync({ force: true });
  console.log('db synced!');

  const [alfred, barbara, carol, david] = await Promise.all([
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
      email: 'david@example.com',
      password: '12345',
      firstName: 'David',
      lastName: 'Example'
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
