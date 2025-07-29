/*
callstack:
The Call Stack is a data structure in JavaScript that keeps track of the function calls in the order they need to be executed.

✅ Key Points:
LIFO: Last In, First Out.

Each time a function is invoked, it's pushed onto the stack.

When it finishes executing, it is popped off.

function greet() {
    console.log("Hello!");
}

function sayHi() {
    greet();
}

sayHi();
Call Stack flow:
 It processes one function at a time, top to bottom.
1. sayHi()       ← pushed
2. greet()       ← pushed
3. console.log() ← pushed
4. console.log() → popped
5. greet()       → popped
6. sayHi()       → popped
 What is the Event Loop?
✅ Definition:
The Event Loop is what allows JavaScript to handle asynchronous operations (like setTimeout, fetch, etc.) even though it's single-threaded.

✅ What It Does:
Watches the call stack and the callback queue.

When the stack is empty, it takes the first function in the queue and pushes it to the stack to execute.
console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 0);

console.log("End");

Start
End
Inside setTimeout

✅ What Actually Happens:
console.log("Start") → goes on stack → executed → removed.

setTimeout() → browser/Web API handles it → sets a timer.

console.log("End") → stack → executed → removed.

Timer expires → callback (console.log("Inside...")) goes to Callback Queue.

Event Loop sees stack is empty → pushes callback to stack.

Callback runs.

visiual diagram:
         +--------------------+
         |    Call Stack      |
         +--------------------+
                   ▲
                   |
            Event Loop checks
                   |
         +--------------------+
         |  Callback Queue    |
         +--------------------+
| Feature        | Description                                          | Example                 |
| -------------- | ---------------------------------------------------- | ----------------------- |
| Call Stack     | Executes functions in LIFO order                     | `function()`            |
| Event Loop     | Pushes async tasks to stack when it’s empty          | `setTimeout`, `fetch()` |
| Callback Queue | Stores async callbacks waiting for stack to be empty |                         |




*/