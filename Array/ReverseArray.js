let arr = [2, 2, 5, 2, 2, 2, 4, 5, 5, 9];
let newArr=[];
function reverse(arr,length){
for(var i =length-1;i>=0;i--){
     newArr.push(arr[i]);
}
console.log(newArr);
}
lengthOfArray=arr.length;
reverse(arr,lengthOfArray);

//short logic
/*newArr=arr.reverse();
console.log(newArr);*/