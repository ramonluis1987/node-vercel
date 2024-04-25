
class User {
  id;
  name;
  age;
  role;
  products;

  constructor(id, name, age, products = [], role) {
    console.log(role);
    this.id = id;
    this.name = name;
    this.age = age;
    this.products = products;
    this.role = role;
  }
}

module.exports = User;