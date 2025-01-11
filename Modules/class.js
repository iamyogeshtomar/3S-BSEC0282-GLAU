// require(`./test.js`);

// console.log(`Inside class.js`);

class Person {
  constructor(name) {
    this.name = name;
  }

  get getName() {
    return this.name;
  }

  set setName(name) {
    this.name = name;
  }
}

module.exports = Person;