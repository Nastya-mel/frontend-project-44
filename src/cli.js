import readlineSync from 'readline-sync'

export default function welcome(description) {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log('Hello, ' + name + '!')
  if (description != undefined) {
    console.log(description)
  }
  return name
}
export const isEven = num => num % 2 === 0 ? 'yes' : 'no'

export const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return false
    }
    return num > 1
  }
}

export function getRandomIntInclusive(min = 1, max = 100) {
  const range = max - min + 1
  return Math.floor(Math.random() * range) + min
}

export const getAnswerOfQuestion = {
  '+': function (x, y) { return x + y },
  '-': function (x, y) { return x - y },
  '*': function (x, y) { return x * y },
}

export const calculateGame = () => {
  console.log('What is the result of the expression?')
  let count = 0
  const signs = ['+', '-', '*']

  while (count < 3) {
    const firstNumber = getRandomIntInclusive(25, 55)
    const secondNumber = getRandomIntInclusive(25, 55)
    const sign = signs[getRandomIntInclusive](0, 2)

    const answerOfQuestion = getAnswerOfQuestion[sign](firstNumber, secondNumber)
    console.log(`Question : ${firstNumber} ${sign} ${secondNumber}`)
    const userAnswer = readlineSync.question(`Your answer:`)
    if (userAnswer === answerOfQuestion) {
      count++
      console.log('Correct!')
    }
  }
}

export function progression() {
  const arr = []

  const start = getRandomIntInclusive(1, 10)
  const length = getRandomIntInclusive(5, 10)
  const step = getRandomIntInclusive(1, 20)

  for (let i = 0; i < length; i += 1) {
    arr.push(start + step * i)
  }

  const randIndex = getRandomIntInclusive(0, arr.length - 1)
  const correctNumber = arr[randIndex]
  arr[randIndex] = '..'

  return { arr, correctNumber }
}
