const chalk = require('chalk');

const people = ['Dam', 'Alex', 'Antho', 'Mehdi'];

for (let i = 0; i < 4; i++) {
    console.log(chalk.blue(`Salut ${people[i]} !`));
}
