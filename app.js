import inquirer from "inquirer"

//const fs = require('fs');

//const generatePage = require('./src/page-template.js');

//const pageHTML = generatePage(name, github);

//first arguement is file name, second is data that's being written, third handles errors
//fs.writeFile('./index.html', pageHTML, err => {
  //if (err) throw err;

  //console.log('Portfolio complete! Check out index.html to see the output!');
//});

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));