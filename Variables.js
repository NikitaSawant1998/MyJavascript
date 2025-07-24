var a=20;
let b=30;
const c=40;
console.log("printing var:"+a);//can be updated: the value of a var variable can be changed.
console.log("printing let:"+b);//can be updated: you can change the value of a let variable.
console.log("printing const:"+c);//cannot be reassigned: once assigned, its value cannot be changed
//all types variables can be redeclared in any function block
const myfun=()=>
{
    let b=60;
    var a=70;
    const c=50;
    console.log("printing let declaring inside block:"+b);
    console.log("printing var declaring inside block:"+a);
    console.log("printing const declaring inside block:"+c);

}
myfun();
var a=100;// can be redeclare in same block// the declaration is moved (hoisted) to the top of the scope but not the initialization.
//let b=110; //cant redeclar block-scoped variable error caught //accessing a const variable before declaration causes an error.
//const c=120;//cant redeclar block-scoped variable error caught//accessing a const variable before declaration causes an error.
console.log("printing var after redeclaring:"+a);
//console.log("printing let after redeclaring :"+b);
//console.log("printing const after redeclaring:"+c);
// for objects and arrays using const
const person = { name: "John", age: 25 };
console.log(person.age);
person.age = 30; // allowed (modifying object properties)
console.log(person.age); // 30
