var arr = ["apple", "mango","apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
var newArray = [];
arr.forEach(element => {
    if (!newArray.includes(element)) {
        newArray.push(element);
    }
});
return newArray;
}

console.log(removeDuplicates(arr));

//using reduce method
/*function removeDuplicates1(arr) {
    var unique = arr.reduce(function (acc, curr) {
        if (!acc.includes(curr))
            acc.push(curr);
        return acc;
    }, []);
    return unique;
}

console.log(removeDuplicates1(arr));*/

//using for loop
/*function checkDuplicate(arr,length){
    const unique=[];
     for(var i=0;i<=length-1;i++){
        if(!unique.includes(arr[i])){
            unique.push(arr[i]);
        }
     }
     return unique;
}
len=arr.length;
console.log(checkDuplicate(arr,len));*/

//using set
/*function checkDupli(arr){
      let uniq=[...new Set(arr)];
      return uniq;
}
console.log(checkDupli(arr));*/
