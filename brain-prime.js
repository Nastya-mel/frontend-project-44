import readlineSync from 'readline-sync';
import welcome, { isPrime } from '../src/cli.js';

export default function game(name) {
  let i = 0;
  while (i < 3) {
    const randNumber = Math.floor(Math.random(10 - 1) * 10);
    console.log(`Question: ${randNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const correct = isPrime(randNumber) ? 'yes': 'no';
    
    if (correct === answer) {
      console.log('Correct');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`)
}

game(welcome('Answer "yes" if given number is prime. Otherwise answer "no".'))