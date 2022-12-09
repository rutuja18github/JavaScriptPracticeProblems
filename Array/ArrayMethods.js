let array = ['Hello','GoodMorning', 'JavaScript'];
console.log(array);
  
let newArray = new Array ('Hello','GoodMorning', 'JavaScript');
console.log(newArray);

console.log(array.indexOf("GoodMorning"));

array.push('React');
console.log(array);

let lastElement = array.pop();
console.log(lastElement);
console.log(array);

let array1 = ["Hello", "hi", "bye"];
let firstElement = array1.shift();
console.log(firstElement);
console.log(array1);

array1.unshift("Good bye");
console.log(array1);

let array2 = ["Hello", "node js", "JavaScript"];
console.log(array2.includes("Hello"));
console.log(array2.includes("React"));

let secondArray = ["React"];  
let newArray1 = array2.concat(secondArray);
console.log(newArray1);

array2.forEach((element)=>
    console.log(element)
);

array2.sort();
console.log(array2);

let oldArray = [1 , 2 , 3 , 4 , 5];
  
console.log(oldArray);
  
let newerArray = oldArray.map(function(element){
    return element * 5;
}); 
console.log(newerArray);

let sumOfElements = oldArray.reduce(
    function (accumulator, element) {
      return accumulator + element;
    });
      
    console.log(sumOfElements);

    let filterArray = oldArray.filter(function (element) {
        return element % 2 === 0;
      });
        
      console.log(filterArray);