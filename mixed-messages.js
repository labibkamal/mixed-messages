function randomNum(num) {
    return Math.floor(Math.random() * num) 
}

const allWords = {
    every: ['Every'],
    time: ['year', 'day', 'night', 'week', 'decade', 'century', 'hour'],
    atLeast: ['at least'],
    number: [5, 100, 6, 69, 4000, 35619],
    noun: ['males', 'females', 'Europeans', 'North Americans', 'dogs', 'cats', 'mosquitoes'],
    verb: ['eat', 'smooche', 'fight', 'sing', 'cry', 'go to', 'dance to', 'think about'],
    subjects: ['the Pythogorean Theorem', 'a Banana', 'the reason to live', 'a cheeseburger', 'an emu', 'aliens']
}

function mixedMessages() {
    console.log(`${allWords.every[randomNum(allWords.every.length)]} \
${allWords.time[randomNum(allWords.time.length)]} \
${allWords.atLeast[randomNum(allWords.atLeast.length)]} \
${allWords.number[randomNum(allWords.number.length)]} \
${allWords.noun[randomNum(allWords.noun.length)]} \
${allWords.verb[randomNum(allWords.verb.length)]} \
${allWords.subjects[randomNum(allWords.subjects.length)]}.`)
}
mixedMessages();
