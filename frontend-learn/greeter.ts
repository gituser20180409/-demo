interface Person{
    firstName:string
    lastName:string
}
function greeter(person:string){
    return `hello${person}`
}
function g(p:Person){
    return p.firstName + p.lastName
}
let user = "往来听吹奏"
let user2 = { firstName: "Jane", lastName: "User" }
g(user2)

document.body.innerHTML = greeter(user)
