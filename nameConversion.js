let textBox = document.querySelector("#text")
let convertBtn = document.querySelector("#convert-btn")

let camelCase = document.querySelector("#camel-case")
let pascalCase = document.querySelector("#pascal-case") 
let snakeCase = document.querySelector("#snake-case")
let screamingSnakeCase = document.querySelector("#screaming-snake-case")
let kebabCase = document.querySelector("#kebab-case")
let screamingKebabCase = document.querySelector("#screaming-kebab-case")

function convertText() {
    let text = textBox.value
    let texts = text.toLowerCase()

    let splitText = texts.split(' ')

    let camelCaseText = splitText.reduce((char1,char2) => char1 + (char2.charAt(0).toUpperCase() + char2.slice(1) ));
    camelCase.textContent = camelCaseText

    let pascalCaseText = splitText.reduce((char1,char2) => (char1.charAt(0).toUpperCase() + char1.slice(1)) + (char2.charAt(0).toUpperCase() + char2.slice(1)))
    pascalCase.textContent = pascalCaseText

    let snakeCaseText = splitText.reduce((char1,char2) => char1 + "_" + char2)
    snakeCase.textContent = snakeCaseText

    let screamingCaseText = splitText.reduce((char1,char2) => (char1.toUpperCase()) + "_" + (char2.toUpperCase()))
    screamingSnakeCase.textContent = screamingCaseText

    let kebabCaseText = splitText.reduce((char1,char2) => char1 + "-" + char2)
    kebabCase.textContent = kebabCaseText

    let screamingKebabCaseText = splitText.reduce((char1,char2) => (char1.toUpperCase()) + "-" + (char2.toUpperCase()))
    screamingKebabCase.textContent = screamingKebabCaseText
}

convertBtn.addEventListener('click', convertText)
