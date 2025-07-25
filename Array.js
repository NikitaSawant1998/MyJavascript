const fruit=["banana","apple","mango","orange","grapse"]
for(let i in fruit)
{
    console.log(fruit[i])
}
fruit[0]="updated";
for(let i in fruit)
{
    console.log(fruit[i])
}
//.map() – Returns a new array by transforming elements
//it returns new array
//just taking temporary variable in map() for arrow function
//The map() method creates a new array by applying a function to each element of the original array.It does not change the original array.
const arr2=fruit.map(fr=>fr+" is a fruit");
console.log(arr2)
const arr3=fruit.map(fr=>fr.toUpperCase());
console.log(arr3)


//.filter() – Returns a new array with elements that meet a condition.
const len = fruit.filter(fruit => fruit.length > 6);

console.log(len);

//.reduce() – Reduces array to a single value.
/*array.reduce((accumulator, currentValue, index, array) => {
  return newAccumulator;
}, initialValue)


*/
// Count occurrences of items
const count = fruit.reduce((acc, f) => {
  acc[f] = (acc[f] || 0) + 1;
  return acc;
}, {});

console.log(count);

