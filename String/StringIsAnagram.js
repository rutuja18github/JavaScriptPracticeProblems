
function anagramString(a, b) {
  
    // check length
    if (a.length !== b.length) {
        return false;
    }

    //rearrange the string
    var str1 = a.split('').sort().join(''); 
    var str2 = b.split('').sort().join('');

     if(str1 === str2){
         return "String is anagram";
     }
     return "String is not anagram"
}

console.log(anagramString('pqr', 'vpq'));