//Promises & Async/Await – Handle asynchronous operations.

//promise
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data fetched"), 2000);
});
}
//syntax of async -await
async function getData() {
    let data = await fetchData();
    console.log(data);
}
getData();
