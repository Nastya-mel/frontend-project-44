#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcome from '../src/cli.js';

function getRandomNumber(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min) + min);
}

const gcdCheck = (a, b) => (b === 0 ? a : gcdCheck(b, a % b));

function gcdGame(name) {
  let attemps = 0;
  while (attemps < 3) {
    const num1 = getRandomNumber(1, 10);
    const num2 = getRandomNumber(1, 10);
    console.log(`Question: ${num1} ${num2}`);
    const correctAnswer = gcdCheck(num1, num2);
    const userAnswer = readlineSync.question('Your answer: ');
    if (`${userAnswer}` === `${correctAnswer}`) {
      attemps += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
gcdGame(welcome('Find the greatest common divisor of given numbers.'));
