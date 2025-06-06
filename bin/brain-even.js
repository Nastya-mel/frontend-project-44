#!/usr/bin/env node
import readlineSync from 'readline-sync'
import welcome, { isEven, getRandomIntInclusive } from '../src/cli.js'

export default function game(name) {
  let i = 0
  while (i < 3) {
    const randNumber = getRandomIntInclusive(1, 100)
    console.log(`Question: ${randNumber}`)
    const answer = readlineSync.question('Your answer: ')
    const correct = isEven(randNumber)

    if (correct === answer) {
      console.log('Correct')
      i += 1
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}

game(welcome('Answer "yes" if the number is even, otherwise answer "no".'))
