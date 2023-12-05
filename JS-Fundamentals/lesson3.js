//objects

let customer = {
    firstName: "John",
    lastName: "Smith"
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

