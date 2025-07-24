function sqre(a)
{
    return a*a;
}
console.log(sqre(5));


const myf=function()
    {
     console.log("hello I am anonymous function or function without name");
     return "done";
    }
console.log(myf());

const myarrow=()=>
    {
        console.log("Its me arrow function");return "arrow";
    }
    console.log(myarrow());
   //----------closure -functions inside functions-------
   function cls()
      {
        let count=0;
        return function clschild()
            {
            
            console.log(count);
            return count++;
            }
      }
      const inc=cls();
      inc();
      inc();
//-------function with default parameter--
function mydf(name="john")
{
  console.log(`hello ${name}!`);
}
mydf("com");
mydf();