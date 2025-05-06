// models/User.js
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.ENUM('admin', 'organizer', 'user'),
        defaultValue: 'user'
      }
    });
  
    User.associate = (models) => {
      User.hasMany(models.Event, { foreignKey: 'organizerId', as: 'organizedEvents' });
      User.belongsToMany(models.Event, { through: 'EventAttendees', as: 'attendedEvents' });
    };
  
    return User;
  };