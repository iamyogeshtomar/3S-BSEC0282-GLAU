// console.log(__dirname);

// require(`./math.js`);

// const { add, sub } = require(`./math.js`);

// console.log(`Inside Index.js`);

// require(`./test.js`); // class.js -> test.js

// require(`./class.js`); // class.js

// const math = require (`./math.js`)
// const math = require (`./math.js`)

// console.log(math);

// console.log(add(2, 5));

// console.log(module);

const Person = require(`./class.js`);

const anuj = new Person(`Aunj`);
const nitesh = new Person(`nitesh`);
const Adarsh = new Person(`adarsh`);

// const anuj = require(`./class.js`);
// anuj.setName = `Anuj`;
// const nitesh = require(`./class.js`);
// nitesh.setName = `Nitesh`;
// const Adarsh = require(`./class.js`);
// Adarsh.setName = `Adarsh`;

console.log(anuj.getName);
console.log(nitesh.getName);
console.log(Adarsh.getName);
