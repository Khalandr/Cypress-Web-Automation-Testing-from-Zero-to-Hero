//loops
// for(statement1; statement2; statement3){
//     //code
// }


//for i loop
for(let i=0; i < 5; i++){
    console.log("hello world " + i)
}

//for of loop
let cars = ["Volvo", "Toyota", "Tesla"]
for(let car of cars){
    console.log(car)
    if(car == "Toyota"){
        break
    }
}

//ES6 syntax for each loop
cars.forEach( car => {
    console.log(car)
})
