#!/usr/bin/env node
import readlineSync from 'readline-sync';
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


const getAnswerOfQuestion = {
    '+': function (x, y) { return x + y; },
    '-': function (x, y) { return x - y; },
    '*': function (x, y) { return x * y; }
}

export const calculateGame = (name) => {
    console.log("What is the result of the expression?")
    let count = 0
    const signs = ['+', '-', '*'];

    while (count < 3) {
        const firstNumber = getRandomIntInclusive(25, 55)
        const secondNumber = getRandomIntInclusive(25, 55)
        const sign = signs[getRandomIntInclusive(0, 2)]

        const answerOfQuestion = getAnswerOfQuestion[sign](firstNumber, secondNumber)
        console.log(`Question : ${firstNumber} ${sign} ${secondNumber}`)
        const userAnswer = readlineSync.question(`Your answer:`)
        if (userAnswer == answerOfQuestion) {
            count++
            console.log('Correct!')
        } else {
            console.log(`'${userAnswer}'  is wrong answer ;(. Correct answer was '${answerOfQuestion}'.\nLet's try again, Sam!`)
            return
        }
       
    }
     console.log(`Congratulations, Sam`)
}
calculateGame()

