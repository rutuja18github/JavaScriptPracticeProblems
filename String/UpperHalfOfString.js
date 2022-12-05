var string = "Welcom to JavaScript Are you ready So let's get started";
const ans=[];
for(let i=0;i<=string.length;i++){
    if(i<=string.length/2){
         var x=string[i].toUpperCase();
         ans.push(x);
    }
    else{
        ans.push(string[i]);
    }
}
console.log(ans.join(''))