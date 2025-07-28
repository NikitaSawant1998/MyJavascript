/*
A closure is a function that remembers its outer scope even after the outer function has finished executing.

📦 Real-World Analogy:
Think of a closure like a backpack. The inner function carries variables (from its outer function) inside its "backpack" wherever it goes.
function outer() {
    let name = "Nikita";

    function inner() {
        console.log("Hello, " + name);  // inner remembers 'name'
    }

    return inner;
}

const greet = outer();  // outer is called, and returns inner
greet();                // "Hello, Nikita"
 Even though outer() has finished running, the inner() function still has access to the variable name.
==>Where Closures Are Used:
#Data privacy (e.g., in counters, timers)
#Callback functions
#Functional programming
*/
function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log("Current count:", count);
    };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3
