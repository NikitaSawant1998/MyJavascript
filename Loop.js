console.log("for loop\n");
for(let i=0;i<5;i++)
{
    console.log(i);
}
console.log("for in loop\n");
let obj=[55,33,44,66,99];
for(let i in obj)
 {
  console.log(obj[i]);//diff
 }
 console.log("for of loop\n");
let obj1=[155,133,144,166,199];
for(let i of obj1)
 {
  console.log(i);//diff
 }
 let str="hello";
 for(let l of str)
 {
    console.log(l);
 }
//printing reverse no. using while
let num=523;
let rem=0;
let rev=0;
while(num!=0)
{
    
    rem=num%10;
    rev=rev*10+rem;
    num=Math.floor(num/10);
}
console.log("reverse num ="+rev);

