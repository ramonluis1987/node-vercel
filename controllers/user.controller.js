const userService = require('../services/user.service');

exports.addUser = (req, res) => {
  try {
    const user = req.body;

    const newUser = userService.addUser(user);

    res.status(201).send({ user: newUser, message: 'User added successfully' });
  } catch (error) {
    res.status(500).send({ error });
  }
};

exports.getUsers = (req, res) => {
  try {
    const users = userService.getUsers();

    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ error });
  }
};

exports.getUserById = (req, res) => {
  try {
    const { id } = req.params;

    const user = userService.getUserById(id);

    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ error });
  }
};

exports.updateUser = (req, res) => {
  try {
    const { id } = req.params;
    const user = req.body;

    const updatedUser = userService.updateUser(id, user);

    if (!updatedUser) {
      return res.status(404).send({ message: 'User not found' });
    }

    res.status(200).send({ user: updatedUser, message: 'User updated successfully' });
  } catch (error) {
    res.status(500).send({ error });
  }
};

exports.getAgeAverage = (req, res) => {
  try {
    const ageAverage = userService.getAgeAverage();

    res.status(200).send({ ageAverage });
  } catch (error) {
    res.status(500).send({ error });
  }
};

exports.createPoint = async (req, res) => {
  try {
    const point = await userService.createPoint(JSON.stringify(req.body));

    res.status(200).send({ point });
  } catch (error) {
    res.status(500).send({ error });
  }
};