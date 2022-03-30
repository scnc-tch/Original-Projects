// Notes: working on equals() trying to make the result = operation
// 1.0 Variables ****************

const viewField = document.getElementById("input")
let array = []
let number = ""
let operation = ""
let num1
let num2

// 2.0 Operations ***************

//2.1 Setting ***************

function setFirstNumber(){
    viewField.textContent = ""
        array.push(number)
        localStorage.numeric1 = array[0]
        number = ""
}

function setSecondNumber(){
    array.push(number)
    localStorage.numeric2 = array[1]
}

let erase = document.getElementById("clearBttn")
    erase.addEventListener("click", function(){
        viewField.textContent = ""
        number = ""
        array = []
        localStorage.clear()
    })

// 2.2 Math Operations ******************

let plus = document.getElementById("plusBttn")
    plus.addEventListener("click", function(num1, num2){
       setFirstNumber()
    })


let minus = document.getElementById("minusBttn")
    minus.addEventListener("click", function(){
        setFirstNumber()
    })

let multiply = document.getElementById("timesBttn")
    multiply.addEventListener("click", function(){
        setFirstNumber()
    })

let divide = document.getElementById("divisionBttn")
    divide.addEventListener("click", function(){
        setFirstNumber()
    })


let equals = document.getElementById("equalsBttn")
    equals.addEventListener("click", function(){
        setSecondNumber()
        num1 = parseInt(localStorage.numeric1)
        num2 = parseInt(localStorage.numeric2)
         let result = num1 + num2 
         console.log(result)
         viewField.textContent = result
       
    })

    
 // 3.0 Numbers ******************

let one = document.getElementById("oneBttn")
    one.addEventListener("click", function(){
        viewField.textContent += 1
        number += 1

    })

let two = document.getElementById("twoBttn")
    two.addEventListener('click', function(){
        viewField.textContent += 2
        number += 2
    })

let three = document.getElementById("threeBttn")
    three.addEventListener('click', function(){
        viewField.textContent += 3
        number += 3
    })

let four = document.getElementById("fourBttn")
    four.addEventListener('click', function(){
        viewField.textContent += 4
        number += 4
    })

let five = document.getElementById("fiveBttn")
    five.addEventListener('click', function(){
        viewField.textContent += 5
        number += 5
    })

let six = document.getElementById("sixBttn")
    six.addEventListener('click', function(){
        viewField.textContent += 6
        number += 6
    })

let seven = document.getElementById("sevenBttn")
    seven.addEventListener('click', function(){
        viewField.textContent += 7
        number += 7
    })

let eight = document.getElementById("eightBttn")
    eight.addEventListener('click', function(){
        viewField.textContent += 8
        number += 8
    })

let nine = document.getElementById("nineBttn")
 nine.addEventListener('click', function(){
        viewField.textContent += 9
        number += 9
    })

let zero = document.getElementById("zeroBttn")
    zero.addEventListener('click', function(){
        viewField.textContent += 0
        number += 0
    })



