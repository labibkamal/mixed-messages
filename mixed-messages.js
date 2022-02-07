function randomNum(num) {
    return Math.floor(Math.random * num - 1) //this function does not work for some reason.
}


console.log(randomNum(3))
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
//sentenceArray.push(allWords.time[randomNum(allWords.time.length)])
//console.log(sentenceArray)
/*
function randomMessage() {
    for (const key in allWords) {
        //console.log(key)
        //sentenceArray.push(key[randomNum(key.length -1)])
        switch (key) {
            case key.every: sentenceArray.push(key[randomNum(key.length)])
            break;
            case key.time: sentenceArray.push(randomNum(key.length))
            break;
            case key.atLeast: sentenceArray.push(randomNum(key.length))
            break;
            case key.number: sentenceArray.push(randomNum(key.length))
            break;
            case key.noun: sentenceArray.push(randomNum(key.length))
            break;
            case key.verb: sentenceArray.push(randomNum(key.length))
            break;
            case key.subjects: sentenceArray.push(randomNum(key.length))
            break;
        }
        console.log(sentenceArray)
    }
}

randomMessage();
  
*/
