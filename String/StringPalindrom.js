const string='AUGTGUA'

function palindrome(str) {

    // convert string to an array
    const arrayVal = str.split('');

    // reverse the array values
    const reverseArrayVal = arrayVal.reverse();

    // convert array to string
    const reverseString = reverseArrayVal.join('');

    if(str == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

palindrome(string);


//const reverseString = string.split('').reverse().join('');//can write in single line also