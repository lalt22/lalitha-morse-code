const alphaToMorse = {
    " ": "/",
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    ".": ".-.-.-",
    ",": "--..---",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    "_": "..--.-",
    '"': ".-..-.",
    "$": "...-..-",
    "@": ".--.-.",
    "¿": "..-.-",
    "¡": "--...-"
 };

 //Takes an english string and converts to morse code;
const englishStrToMorseStr = (engStr) =>{
    const letters = engStr.split("");
    const morseStr = letters.map(letter => {
        return alphaToMorse[letter];
    });

    return morseStr.join(" ");
}


//Take morse string (separated by space) and convert to english
const morseToEnglishStr = (morseStr) => {
    const letters = morseStr.split(" ");
    const engStr = letters.map(letter => {
        return findAlphaLetter(letter);
    });

    return engStr.join("");
}


function findAlphaLetter(morseLetter) {
    return Object.keys(alphaToMorse).find(key => alphaToMorse[key] === morseLetter);
}

export {englishStrToMorseStr, morseToEnglishStr}