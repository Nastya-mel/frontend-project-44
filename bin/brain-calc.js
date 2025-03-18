#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcome, { getRandomIntInclusive, getAnswerOfQuestion } from '../src/cli.js';

export default function calcGame(name) {
  welcome();
  let i = 0;
  const signs = ['+', '-', '*'];
  while (i < 3) {
    const firstNumber =  getRandomIntInclusive(25, 55);
    const secondNumber =  getRandomIntInclusive(25, 55);
    const sign = signs[ getRandomIntInclusive(0, 2)];
    const answerOfQuestion = getAnswerOfQuestion[sign](firstNumber, secondNumber);
    console.log(`Question: ${firstNumber} ${sign} ${secondNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (`${userAnswer}` === `${answerOfQuestion}`) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answerOfQuestion}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
calcGame(welcome('What is the result of the expression?'));
