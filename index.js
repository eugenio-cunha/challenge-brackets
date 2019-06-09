'use stric';

const brain = require('brain.js');
const dataset = require('./dataset.json');

const network = new brain.recurrent.LSTM();

console.log('TRAIN:')
network.train(dataset, {
    iterations: 1500,
    log: true,
    logPeriod: 50,
    layers: [10]
  });

console.log('\nOUTPUT:')
console.log('"()\t\t":', network.run('()'));
console.log('"{[()]}\t\t":', network.run('{[()]}'));
console.log('"[(){}]\t\t":', network.run('[(){}()]'));
console.log('"()]\t\t":', network.run('()]'));
console.log('"[]]]\t\t":', network.run('[]]]'));
console.log('"(([]}}\t\t":', network.run('(([]}}'));
 