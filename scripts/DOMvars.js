import {englishStrToMorseStr, morseToEnglishStr} from "./translator.js";

window.addEventListener("DOMContentLoaded", (event) => {
    const englishInput = document.getElementById("englishInput");
    const morseInput = document.getElementById("morseInput");
    const clearButton = document.getElementById("clearButton");
    //Get English Input and Translate
    if (englishInput) {
        
        englishInput.onkeyup = () => {
            const englishInputValue = englishInput.value;
            console.log("element exists " + englishInputValue);
            const englishToUpper = englishInputValue.toUpperCase();
            const englishResult = englishStrToMorseStr(englishToUpper);

            console.log("Updating field to " + englishResult);
            
            //Use value NOT innerhtml: https://stackoverflow.com/questions/1927593/cant-update-textarea-with-javascript-after-writing-to-it-manually
            morseInput.value = englishResult;
        };
    }
    if (morseInput) {
        morseInput.onkeyup = () => {
            const morseInputValue = morseInput.value;
            console.log("element exists " + morseInputValue);

            const morseResult = morseToEnglishStr(morseInputValue);
            console.log("Updating field to " + morseResult);

            //Use value NOT innerhtml: https://stackoverflow.com/questions/1927593/cant-update-textarea-with-javascript-after-writing-to-it-manually
            englishInput.value = morseResult;
        }
    }
    if (clearButton) {
        clearButton.onclick = () => {
            morseInput.value = "";
            englishInput.value = "";
        }
    }

})



