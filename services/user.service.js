const { Point, User } = require('../models');

let users = [];

const addUser = (user) => {
  const newUser = new User(users.length + 1, user.name, user.age, user.products, user.role);

  users.push(newUser);

  return newUser;
}

const getUsers = () => {
  return users;
};

const getUserById = (id) => {
  return users.find((user) => user.id === parseInt(id));
};

const updateUser = (id, user) => {
  const userIndex = users.findIndex((user) => user.id === parseInt(id));

  if (userIndex === -1) {
    return null;
  }

  users[userIndex] = { ...users[userIndex], ...user };

  return users[userIndex];
};

const getAgeAverage = () => {
  const ageAverage = users.reduce((acc, user) => acc + user.age, 0) / users.length;

  return ageAverage;
};

const getAgeAverageByRole = (role) => {
  const usersByRole = users.filter((user) => user.role === role);

  const ageAverage = usersByRole.reduce((acc, user) => acc + user.age, 0) / usersByRole.length;

  return ageAverage;
};

const createPoint = async (point) => {
  return await Point.create({ coordinate: point });
}

module.exports = {
  addUser,
  createPoint,
  getAgeAverage,
  getAgeAverageByRole,
  getUsers,
  getUserById,
  updateUser,
  users,
};