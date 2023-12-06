//functions

helloOne()
//declarative function
function helloOne(){
    console.log("hello one")
}
helloOne()


//anonymus function
let helloTwo = function(){
    console.log("hello two")
}

helloTwo()

//ES6 function syntax or arrow function
let helloThree = () => {
    console.log("hello three")
}
helloThree()

//function with arguments
function printName(name){
    console.log(name)
}

printName("Mike")

//function with return
function multiplyByTwo(number){
    let result = number * 2
    return result
}
let myResult = multiplyByTwo(5)
console.log(myResult)

//test