console.log("Start");

function wait() {
    let start = Date.now();
    while (Date.now() - start < 3000) {}
}

wait(); // blocks for 3 seconds
console.log("End");
// while compared to asynchronous this is synchronous take dalayed time which is executing line by line by.