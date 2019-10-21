var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + middleInitial + lastName;
    }
    return Student;
}());
function g(p) {
    return "hello," + p.firstName + " " + p.lastName;
}
var u = new Student("Jack", "M.", "U");
g(u);
var isDone = false;
var num = 0x151;
var n = [1, 2];
var list = [1, 2];
var list2 = [u, new Student('1', '2', '3')];
console.log(list2);
/**元组类型*/
var x;
x = ['', 1];
x = ['dsaghghdg', 1];
//x=['']错误1
//x=[1,'']错误2
//x=['','']错误3
//x=['',1,1]错误4
//x=[]错误5
console.log(x);
console.log(x[0].substr(1));
//x[2]='w'不可以越界访问
//x[3]='wo'
/**枚举类型*/
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color["blue"] = "#3cf";
})(Color || (Color = {}));
var c = Color.red;
console.log(c);
/**联合类型*/
var my;
//my = undefined 错误写法
my = 1;
my = 'add';
function getString(something) {
    return something.toString();
}
/**
 * @param something
 */
function getLength(something) {
    return;
}
getLength('fdsfsdfsd');
var p = {
    name: 'T',
    age: 12121
};
