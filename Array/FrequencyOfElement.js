const letters = ["a", "b", "c", "a", "b", "c", "a", "b"];
const count = {};
letters.forEach(e => {
    if(count[e]){
        count[e]++
    }
    else{
         count[e] = 1
        }
});

console.log(count)