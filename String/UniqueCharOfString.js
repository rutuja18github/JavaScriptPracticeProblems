function uniqueChar(str){
    // The variable that contains the unique values
    let unique = "";
     
    for(let i = 0; i < str.length; i++){
      // Checking if the unique contains the character
      if(unique.includes(str[i]) === false){
        // If the character not present in unique Concatenate the character with unique
        unique += str[i]
      }
    }
    return unique;
  }
   
  console.log(uniqueChar("Rutuja"))