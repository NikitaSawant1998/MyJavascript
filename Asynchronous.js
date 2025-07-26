/*Asynchronous JavaScript refers to the ability of JavaScript to execute tasks in the background without blocking the main 
thread (which runs your UI and core logic). It allows your program to keep running while waiting for long operations like:

Fetching data from a server (API calls)

Reading files

Waiting for user input

Timers (setTimeout)
setTimeout(), setInterval(), Callbacks
 Example:
setTimeout(() => console.log("Hello after 2 seconds"), 2000);
| **Synchronous**       | **Asynchronous**                     |
| --------------------- | ------------------------------------ |
| Executes line by line | Can skip long tasks and resume later |
| Blocks code execution | Doesn’t block the rest of the code   |
| Slower for I/O tasks  | Faster and more responsive           |

 Asynchronous JavaScript – Execute code without blocking execution.
setTimeout(), setInterval(), Callbacks

*/
console.log("Start");

setTimeout(() => {
    console.log("Delayed message");
}, 3000);

console.log("End");
