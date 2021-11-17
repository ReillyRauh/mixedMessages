const collectWords = {
    start: ['hi', 'ew', 'hello', 'hey', 'ugh', 'yo', 'ey', 'bro'],
    mid: ["you're disgusting", "trash", "get good", "beautiful", "you're cute", "O_O"],
    end: ["fortnite", "game", "bye", "send", "come on", "do it", "yesn't"]
}

let sentence = []

function randomNumber(num) {
    return Math.floor(Math.random() * num)
}

for (let word in collectWords) {
    let indx = randomNumber(collectWords[word].length)

    switch (word) {
        case 'start':
            sentence.push(collectWords[word][indx])
            break
        case 'mid':
            sentence.push(collectWords[word][indx])
            break
        case 'end':
            sentence.push(collectWords[word][indx])
            break
        default:
            sentence.push(`No?`)
    }
}

function formatSentence(sentence) {
    const formattedSentence = sentence.join('\n')
    console.log(formattedSentence)
}

formatSentence(sentence)