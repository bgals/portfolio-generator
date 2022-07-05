//const profileDataArgs = process.argv.slice(2, process.argv.length);
//console.log(profileDataArgs);

//const printProfileData = profileDataArr => {
  // profileDataArr.forEach((profileItem) => console.log(profileItem));
//};

//printProfileData(profileDataArgs);
const fs = require('fs');

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

//first arguement is file name, second is data that's being written, third handles errors
fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});