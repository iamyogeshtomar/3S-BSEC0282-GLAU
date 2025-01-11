function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}

function password(password) {
  console.log(password);
}

// console.log(sub(2, 5));

console.log(`Inside math.js`);

require(`./test.js`); // class.js -> test.js

require(`./class.js`); // class.js

module.exports = {
  add,
  sub,
};
