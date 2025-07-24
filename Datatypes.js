// Js has 2 types of dt ie ->>primitive:simple values-stored single value-->null,undefined,number,string,symbol,bigInt,boolean
//                         ->>non-primitive:reference values-stored ref of multiple values-->array,object

//Number
let a=5;
let b=5.2;
console.log("printing Number"+a);console.log(typeof(a));
console.log("printing Number"+b);console.log(typeof(b));

//String uses "",'',``<backticks>
let c="hello";
let d=`hie`;
console.log("printing String"+c);console.log(typeof(c));
console.log("printing string"+d);console.log(typeof(d));

//boolean
 let e=true;
 console.log(typeof(e));

//Undefined-declared but not assigned value

let f;
console.log(f);
console.log(typeof(f));

//null
let g=null;
console.log(g);
console.log(typeof(g));

//BigInt -for greatest numbers
let h=21545357523475684388899999555n;
console.log(h);
console.log(typeof(h));

//--------Non-Primitive------------

// object :#A collection of key-value pairs.#Used to store multiple values in a structured way.
let obj={name:"abc",
         rollno:50
        }
console.log(obj);
console.log(typeof(obj));
console.log(obj.name);

// Arrays :#A special type of object that holds multiple values in an ordered list.#Uses indexing, starting from 0.# iTs like list of python
let arr=["mango","banana","orange",7,8];
console.log(arr);
console.log(typeof(arr));
console.log(arr[2]);

//Function :A reusable block of code that performs a specific task.
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Piku"));

//Date: for date and time
let today = new Date();
console.log(today); // Output: current date and time

//regular expression:used pattern matching and searching #test() method is used for regex in js
let pattern = /hello/i; // Case-insensitive match for "hello"
let result = pattern.test("Hello World");
console.log(result);

let id=/@gmail.com/;
console.log(id.test("nikitasawant5193@gmail.com"));
console.log(id.test("nikitasawant5193gmail.com"));
