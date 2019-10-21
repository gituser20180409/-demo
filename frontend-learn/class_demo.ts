class Student{
    fullName:string
    constructor(public firstName,public middleInitial,public lastName){
        this.fullName = firstName + middleInitial + lastName
    }
}
interface Person{
    firstName:string
    lastName:string
}
function g(p:Person){
    return `hello,${p.firstName} ${p.lastName}`
}
let u:Person = new Student("Jack","M.","U")
g(u)
let isDone:boolean = false
let num:number = 0x151
let n:number[] = [1,2]
let list:Array<number> = [1,2]
let list2:Array<Person>=[u,new Student('1','2','3')]
console.log(list2)
/**元组类型*/
let x:[string,number]
x=['',1]
x=['dsaghghdg',1]

//x=['']错误1
//x=[1,'']错误2
//x=['','']错误3
//x=['',1,1]错误4
//x=[]错误5
console.log(x)
console.log(x[0].substr(1))
//x[2]='w'不可以越界访问
//x[3]='wo'
/**枚举类型*/
enum Color{
    red,
    green,
    blue='#3cf'
}
let c:Color = Color.red
console.log(c)
/**联合类型*/
let my:string|number
//my = undefined 错误写法
my = 1
my = 'add'
function getString(something:string|number):string{
    return something.toString()
}
/**
 * @param something
 */
function getLength(something:string|number):number{
    return
}
getLength('fdsfsdfsd')

interface P{
    name:string
    age?:number
}
let p:P = {
    name:'T',
    age:12121
}

