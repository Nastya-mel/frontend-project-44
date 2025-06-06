#!/usr/bin/env node
import readlineSync from 'readline-sync'
import welcome, { progression } from '../src/cli.js'

export default function progressionGame(name) {
  let attemps = 0
  while (attemps < 3) {
    const { arr, correctNumber } = progression()
    console.log(`Question: ${arr.join(' ')}`)
    const userAnswer = readlineSync.question(`Your answer: `)
    if (userAnswer.toString() === correctNumber.toString()) {
      attemps += 1
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctNumber}'.\nLet's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}

progressionGame(welcome('What number is missing in the progression?'))
