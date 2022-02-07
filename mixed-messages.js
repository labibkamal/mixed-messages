function randomNum(num) {
    return Math.floor(Math.random * num)
}

const allWords = {
    every: ['Every '],
    time: ['year ', 'day ', 'night ', 'week ', 'decade ', 'century ', 'hour '],
    atLeast: ['at least '],
    number: [5, 100, 6, 69, 4000, 35619],
    noun: ['males ', 'females ', 'Europeans ', 'North Americans ', 'dogs ', 'cats ', 'mosquitoes '],
    verb: ['eats ', 'smooches ', 'fights ', 'sings ', 'cries ', 'goes to ', 'dances to ', 'thinks about '],
    subjects: ['the Pythogorean Theorem', 'a Banana', 'reason to live', '']
}

let sentenceArray = []


function randomMessage() {
    for (const i in Object.keys(allWords)) {
        switch (i) {
            //object keys are not being defined when running code. error: ReferenceError: every is not defined.
            case allWords.every: sentenceArray.push(randomNum(i.length))
            break;
            case allWords.time: sentenceArray.push(randomNum(i.length))
            break;
            case allWords.atLeast: sentenceArray.push(randomNum(i.length))
            break;
            case allWords.number: sentenceArray.push(randomNum(i.length))
            break;
        }
    }
    console.log(sentenceArray)
}

randomMessage();
    /*
    let i = 
    switch (i in allWords) {
        case every: sentenceArray.push('Every')
        break;
        case time: sentenceArray.push()
    }
    

    console.log(sentenceArray)
}
*/    


