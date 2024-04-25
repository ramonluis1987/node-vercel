const express = require('express');

const { addUser, getAgeAverage, getUsers, getUserById, updateUser } = require('./controllers/user.controller');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  // const date = new Date().getTime();
  // const lessOneHour = new Date(date - 3600000).getTime();

  // const newDate = new Date(lessOneHour);
  // const startDay = new Date(newDate.setHours(0, 0, 0, 0));
  // const endDay = new Date(newDate.setHours(23, 59, 59, 999));

  res.send({ sucess: true, message: 'Hello World!' });
});

app.post('/users', addUser);
app.get('/users', getUsers);
app.get('/users/:id', getUserById);
app.put('/users/:id', updateUser);
app.get('/users/ageAverage', getAgeAverage);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
