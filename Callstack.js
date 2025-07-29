// Event Loop & Call Stack:JavaScript handles async tasks using an event loop.

console.log("Start");
setTimeout(() => console.log("Async Task"), 0);
console.log("End");
//another example
console.log("Start");

setTimeout(function() {
    console.log("Inside setTimeout");
}, 0);

console.log("End");
//
function a() {
  console.log("a");
}

function b() {
  setTimeout(() => console.log("b"), 1000);
}

function c() {
  console.log("c");
}

a();
b();
c();
/*
o/p:
Start
End
Inside setTimeout

console.log("Start") → runs immediately.

setTimeout(..., 0) → goes to Web APIs, waits.

console.log("End") → runs immediately.

setTimeout callback goes to the callback queue.

Event loop sees the stack is empty → pushes the callback.

console.log("Inside setTimeout") runs last.

| Term           | Description                              |
| -------------- | ---------------------------------------- |
| Call Stack     | Executes functions line-by-line          |
| Web APIs       | Browser APIs for async tasks             |
| Callback Queue | Stores callbacks waiting to run          |
| Event Loop     | Pushes ready callbacks to the call stack |

*/
//One More Example – Mixing Sync & Async
//o/p:-a c b
function a() {
  console.log("a");
}

function b() {
  setTimeout(() => console.log("b"), 1000);
}

function c() {
  console.log("c");
}

a();
b();
c();
