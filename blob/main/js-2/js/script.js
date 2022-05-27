const number = document.querySelector('#inputNumb')
const result = document.querySelector('#resultFirstExercise')

function getNumb(arg1) {
    return Number.parseInt(arg1, 10)+1
}

number.addEventListener("input", () => {
    result.textContent = getNumb(number.value)
})



const number2 = document.querySelector('#inputNumb2')
const number22 = document.querySelector('#inputNumb22')
const result2 = document.querySelector('#resultSecondExercise')

function getRemainder(arg1, arg2) {
    return Number.parseInt(arg1, 10)%Number.parseInt(arg2, 10)
}

number22.addEventListener("input", () => {
    result2.textContent = getRemainder(number2.value, number22.value)
})




let dateControl = document.querySelector('#year')
const result3 = document.querySelector('#resultThirdExercise')

document.querySelector("#button").onclick = function(){
    var age = 2022 - dateControl.value
    if(age >= 18){
        result3.textContent = "Welcome"
    } else {
        result3.textContent = "Otkaz"
    }
}

const date = document.querySelector('#year4')
const result4 = document.querySelector('#resultFourthExercise')

document.querySelector("#button4").onclick = function(){
    if(date.value != ''){
        var age = (2022 - date.value) +1
        result4.textContent = age
        
    } else {
        result4.textContent = "0"
    }
}

const rost = document.querySelector('#rost')
const result5 = document.querySelector('#resultFifthExercise')

function canRide(arg){
    r = Number.parseInt(arg, 10)
    return r >= 140
}

rost.addEventListener("input", () => {
    result5.textContent = canRide(rost.value)
})