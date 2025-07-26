/*
In JavaScript, error handling means detecting and managing problems 
(like invalid input or failed API calls) without stopping the entire program.
Syntax:
  try {
      // Code that might throw an error
      } catch (error) 
         {
          // Code to handle the error
         } finally 
           {
            // (Optional) Code that runs no matter what
           }
            | Block     | Purpose                              |
| --------- | ------------------------------------ |
| `try`     | Wrap code that might throw an error  |
| `catch`   | Handle the error and prevent crash   |
| `finally` | Always runs (cleanup, closing files) |
| `throw`   | Manually create custom errors        |

*/
try {
    let a = 5;
    let b = 0;
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }
    let result = a / b;
    console.log(result);
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("This will always run.");
}
