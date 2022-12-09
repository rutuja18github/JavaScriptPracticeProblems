let str ="Rutuja"
function reverseStr(string){
    strArray=string.split('');
    let str1=strArray.reverse().join('');
    console.log("Reversed String: ");
    console.log(str1);
}
reverseStr(str);

//short logic
//let revString=string.split('').reverse().join('');