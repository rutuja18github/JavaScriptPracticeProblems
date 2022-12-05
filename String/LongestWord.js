let longestWord = (string) => {
    let stringArr = string.split(" ");
    console.log(stringArr)
    let longest = 0;
    let longest_word = null;
    for (let i = 0; i < stringArr.length; i++) {
      if (longest < stringArr[i].length) {
        longest = stringArr[i].length;
        longest_word = stringArr[i];
      }
    }
    return longest_word;
  };
   
  console.log(
    longestWord("JavaScript is Asyncronous language" )
  );