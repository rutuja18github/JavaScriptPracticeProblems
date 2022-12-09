let arr = [1, 2, 3, 4, 5];
  
let findElement = arr.find(function(element){
    return element > 4
});
  
console.log(findElement);
  
let findIndexValue = arr.findIndex(function(element){
    return element >= 4
});
  
console.log(findIndexValue);


let sliceArray = arr.slice(0, 2);
console.log("Slice Array: " + sliceArray);
  
console.log("Original Array: " + arr);
let spliceArray = arr.splice(0, 2);
  
console.log("Splice Array: " + spliceArray);
console.log("Original Array: " + arr);



let arr1 = [1, 2, 3, 4, 5];
  
let NumbersGreaterThanZero = arr1.every(
function(element){
    return element > 0
});
  
let NumbersLessThanZero = arr1.some(
function(element){
    return element < 0
});
  
console.log(NumbersGreaterThanZero);
console.log(NumbersLessThanZero);