let first = [1, 3, 5, 7, 9];
let second = [2, 3, 4, 5, 6, 9];

let res_arr = (firstArray, secondArray) => {
    let newArray = [];
    for (let i = 0; i < firstArray.length; i++) {
        for (let j = 0; j < secondArray.length; j++) {
            if (firstArray[i] === secondArray[j]) {
                newArray.push(firstArray[i]);
            }
        }
    }
    return newArray;
};
console.log("Array obtained is :");
console.log(res_arr(first, second));

/*let new_array = first.filter(
    (element) => second.includes(element));

console.log("Array obtained is :");
console.log(new_array);*/