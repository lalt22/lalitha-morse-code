import * as translator from "./translator.js";

const {
    englishStrToMorseStr,
    morseToEnglishStr,
} = translator;


describe("Translates English Strings to Morse Strings", () => {
    test("Empty string", () => {
        expect(englishStrToMorseStr(""))
        .toBe("");
    })
    test("Single word", () => {
        expect(englishStrToMorseStr("hello"))
        .toBe(".... . .-.. .-.. ---");
    })
    test("Sentence", () => {
        expect(englishStrToMorseStr("hello this is a sentence."))
        .toBe(".... . .-.. .-.. --- / - .... .. ... / .. ... / .- / ... . -. - . -. -.-. . .-.-.-")
    })
})

describe("Translates Morse Strings to English Strings", () => {
    test("Empty string", () => {
        expect(morseToEnglishStr(""))
        .toBe("");
    })
    test("Single word", () => {
        expect(morseToEnglishStr(".... . .-.. .-.. ---"))
        .toBe("HELLO");
    })
    test("Sentence", () => {
        expect(morseToEnglishStr(".... . .-.. .-.. --- / - .... .. ... / .. ... / .- / ... . -. - . -. -.-. . .-.-.-"))
        .toBe("HELLO THIS IS A SENTENCE.");
    })
})