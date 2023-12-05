//objects

let customer = {
    firstName: "John",
    lastName: "Smith",
    car: ["Volvo", "Toyota", "Tesla"]
}

console.log(customer)
console.log(customer.firstName)
//Dot notation
customer.firstName = "Mike"
console.log(customer.firstName)
//Bracket notation
customer["lastName"] = "Silver"
console.log(customer["lastName"])
console.log(`${customer.firstName} ${customer.lastName}`)

//arrays
let car = ["Volvo", "Toyota", "Tesla"]
console.log(car[0])
car[1] = "BMW"
console.log(car)

console.log(customer.car[2])

