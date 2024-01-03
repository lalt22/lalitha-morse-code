import {englishStrToMorseStr, morseToEnglishStr} from "./translator.js";

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



