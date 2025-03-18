import readlineSync from 'readline-sync';

export default function welcome(description) {
    console.log('Welcome to the Brain Games!')
    const name = readlineSync.question('May I have your name? ')
    console.log('Hello, ' + name + '!')
    if (description != undefined){
        console.log(description)
    }
    return name
}
export const isEven = (num) => num % 2 === 0 ? 'yes' : 'no';

export function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

export const getAnswerOfQuestion = {
    '+': function (x,y) { return x + y;},
    '-': function (x,y) { return x - y;},
    '*': function (x,y) { return x * y;},
}


export const calculateGame = (name) => {
    console.log("What is the result of the expression?")
    let count = 0
    const signs = ['+', '-', '*'];

    while(count < 3) {
        const firstNumber = getRandomIntInclusive(25, 55)
        const secondNumber = getRandomIntInclusive(25, 55)
        const sign = signs[getRandomIntInclusive](0, 2)

        const answerOfQuestion = getAnswerOfQuestion[sign] (firstNumber, secondNumber)
        console.log(`Question : ${firstNumber} ${sign} ${secondNumber}`)
        const userAnswer = rreadlineSync.question(`Your answer:`)
        if (userAnswear === answerOfQuestion) {
    count++
    console.log('Correct!')
        }
    }
}


