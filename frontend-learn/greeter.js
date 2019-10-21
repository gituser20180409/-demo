function greeter(person) {
    return "hello" + person;
}
function g(p) {
    return p.firstName + p.lastName;
}
var user = "往来听吹奏";
var user2 = { firstName: "Jane", lastName: "User" };
g(user2);
//document.body.innerHTML = greeter(user);
class CreateUser{
    constructor(name){
        this.name = name
        this.getName()
    }
    getName(){
        return this.name
    }
    set P(v){
        console.log('setter',v)
        this.P = v
    }
    get P(){
        console.log('getter')
        return this.P
    }
}
let proxyMode = (function () {
    let instance = null
    return function(name){
        if(!instance){
            instance = new CreateUser(name)
        }
        return instance
    }

})()
let s = new CreateUser('name')
//s.P = 1
//s.P
