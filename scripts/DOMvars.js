//Takes an english string and converts to morse code;
function englishStrToMorseStr(engStr) {
    const letters = engStr.split("");
    const morseStr = letters.map(letter => {
        return alphaToMorse[letter];
    });

    return morseStr.join(" ");
}

//Take morse string (separated by space) and convert to english
function morseToEnglishStr(morseStr) {
    const letters = morseStr.split(" ");
    const engStr = letters.map(letter => {
        return findAlphaLetter(letter);
    });

    return engStr.join("");
}

function findAlphaLetter(morseLetter) {
    return Object.keys(alphaToMorse).find(key => alphaToMorse[key] === morseLetter);
}

window.addEventListener("DOMContentLoaded", (event) => {
    const englishSubmit = document.getElementById("submitEnglishInput");
    const morseSubmit = document.getElementById("submitMorseInput");
    //Get English Input and Translate
    if (englishSubmit) {
        englishSubmit.onclick = () => {
            let englishInput = document.getElementById("englishInput").value;
            const englishToUpper = englishInput.toUpperCase();
            const englishResult = englishStrToMorseStr(englishToUpper);
            document.getElementById("resultEnglish").innerHTML = "Result: " + englishResult;
        };
    }
    if (morseSubmit) {
        morseSubmit.onclick = () => {
            let morseInput = document.getElementById("morseInput").value;
            const morseResult = morseToEnglishStr(morseInput);
            document.getElementById("resultMorse").innerHTML = "Result: " + morseResult;
        }
    }

})



