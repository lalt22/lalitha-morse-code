import {englishStrToMorseStr, morseToEnglishStr} from "./translator.js";

window.addEventListener("DOMContentLoaded", (event) => {
    const englishInput = document.getElementById("englishInput");
    const morseInput = document.getElementById("morseInput");
    //Get English Input and Translate
    if (englishInput) {
        
        englishInput.onkeyup = () => {
            const englishInputValue = englishInput.value;
            console.log("element exists " + englishInputValue);
            const englishToUpper = englishInputValue.toUpperCase();
            const englishResult = englishStrToMorseStr(englishToUpper);

            console.log("Updating field to " + englishResult);
            document.getElementById("morseInput").innerHTML = englishResult;
        };
    }
    if (morseInput) {
        morseInput.onkeyup = () => {
            const morseInputValue = morseInput.value;
            console.log("element exists " + morseInputValue);

            const morseResult = morseToEnglishStr(morseInputValue);
            console.log("Updating field to " + morseResult);
            document.getElementById("englishInput").innerHTML = morseResult;
        }
    }

})



