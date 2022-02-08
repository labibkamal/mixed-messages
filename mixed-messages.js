function randomNum(num) {
    return Math.floor(Math.random() * num) 
}

// console.log(randomNum(3))

const allWords = {
    every: ['Every'],
    time: ['year', 'day', 'night', 'week', 'decade', 'century', 'hour'],
    atLeast: ['at least'],
    number: [5, 100, 6, 69, 4000, 35619],
    noun: ['males', 'females', 'Europeans', 'North Americans', 'dogs', 'cats', 'mosquitoes'],
    verb: ['eat', 'smooche', 'fight', 'sing', 'cry', 'go to', 'dance to', 'think about'],
    subjects: ['the Pythogorean Theorem', 'a Banana', 'reason to live', 'cheeseburger']
}

//sentenceArray.push(allWords.time[randomNum(allWords.time.length)])
//console.log(sentenceArray)

//sentenceArray.push(allWords.time[randomNum(allWords.time.length)]) ///THIS WORKS!!
//console.log(sentenceArray);


function mixedMessages() {
    console.log(allWords.every[randomNum(allWords.every.length)])
    console.log(allWords.time[randomNum(allWords.time.length)])
    console.log(allWords.atLeast[randomNum(allWords.atLeast.length)])
    console.log(allWords.number[randomNum(allWords.number.length)])
    console.log(allWords.noun[randomNum(allWords.noun.length)])
    console.log(allWords.verb[randomNum(allWords.verb.length)])
    console.log(allWords.subjects[randomNum(allWords.subjects.length)])

   /* let sentenceArray = []
    sentenceArray.push(allWords.every[randomNum(allWords.every.length)])
    sentenceArray.push(allWords.time[randomNum(allWords.time.length)])
    sentenceArray.push(allWords.atLeast[randomNum(allWords.atLeast.length)])
    sentenceArray.push(allWords.number[randomNum(allWords.number.length)])
    sentenceArray.push(allWords.noun[randomNum(allWords.noun.length)])
    sentenceArray.push(allWords.verb[randomNum(allWords.verb.length)])
    sentenceArray.push(allWords.subjects[randomNum(allWords.subjects.length)])
    sentenceArray.join(" ");
    console.log(sentenceArray);*/
}

/*
function randomMessage() {
    for (const key in allWords) {
        //console.log(key)
        //sentenceArray.push(key[randomNum(key.length -1)])
        switch (key) {
            case every: sentenceArray.push(key[randomNum(key.length)])
            break;
            case time: sentenceArray.push(key[randomNum(key.length)])
            break;
            case atLeast: sentenceArray.push(key[randomNum(key.length)])
            break;
            case number: sentenceArray.push(key[randomNum(key.length)])
            break;
            case noun: sentenceArray.push(key[randomNum(key.length)])
            break;
            case key.verb: sentenceArray.push(key[randomNum(key.length)])
            break;
            case key.subjects: sentenceArray.push(key[randomNum(key.length)])
            break;
        }
        console.log(sentenceArray)
    }
}
*/

mixedMessages();