const User = require('./user')
const Appointment = require('./appointment')

// Appointment.belongsTo(User, {as: 'Host'})
Appointment.belongsTo(User, {as: 'Attendee'})
User.hasMany(Appointment)

module.exports = {
  User,
  Appointment,
}