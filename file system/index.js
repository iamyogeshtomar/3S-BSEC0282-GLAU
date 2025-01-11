const fs = require(`fs/promises`);

const data = `This is a sample text`;

// Synchronous exmaple
// fs.writeFileSync(`sample.txt`, `This is MERN stack`, {
//   encoding: `utf-8`,
//   flag: `w`,
// });

// Callback example
// fs.writeFile(`message.txt`, data, { encoding: `utf-8`, flag: `a` }, (error) => {
//   if (error) throw error;
//   console.log(`File written sucessfully!!`);
// });

// Promise example
async function fileWrite(data) {
  try {
    await fs.writeFile(`test.js`, data, {
      encoding: `utf-8`,
      flag: `w`,
    });
    console.log(`Inside `)
  } catch (error) {}
}

// console.log(`File written successfully!!!`);
