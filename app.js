console.log('loaded')
const $sevenButton = document.querySelector('#seven')
const $eightButton = document.querySelector('#eight')
const $nineButton = document.querySelector('#nine')
const $fourButton = document.querySelector('#four')
const $fiveButton = document.querySelector('#five')
const $sixButton = document.querySelector('#six')
const $oneButton = document.querySelector('#one')
const $twoButton = document.querySelector('#two')
const $threeButton = document.querySelector('#three')
const $zeroButton = document.querySelector('#zero')

const $plusButton = document.querySelector('#plus')
const $multiplyButton = document.querySelector('#multiply')
const $minusButton = document.querySelector('#minus')
const $clearButton = document.querySelector('#clear')
const $divideButton = document.querySelector('#divide')
const $equalButton = document.querySelector('#equals')

const $calcScreen = document.querySelector('#screen')

let screen = 0

$calcScreen.textContent = screen

$clearButton.addEventListener('click', (event) => {
    screen = 0
    $calcScreen.textContent = screen 
})
$sevenButton.addEventListener('click', (event) => {
    $calcScreen.append('7')
})
$eightButton.addEventListener('click', (event) => {
    $calcScreen.append('8')
})
$nineButton.addEventListener('click', (event) => {
    $calcScreen.append('9')
})
$fourButton.addEventListener('click', (event) => {
    $calcScreen.append('4')
})
$fiveButton.addEventListener('click', (event) => {
    $calcScreen.append('5')
})
$sixButton.addEventListener('click', (event) => {
    $calcScreen.append('6')
})
$oneButton.addEventListener('click', (event) => {
    $calcScreen.append('1')
})
$twoButton.addEventListener('click', (event) => {
    $calcScreen.append('2')
})
$threeButton.addEventListener('click', (event) => {
    $calcScreen.append('3')
})
$zeroButton.addEventListener('click', (event) => {
    $calcScreen.append('0')
})
$plusButton.addEventListener('click', (event) => {
    $calcScreen.append('+')
})
$threeButton.addEventListener('click', (event) => {
    $calcScreen.append('3')
})
















