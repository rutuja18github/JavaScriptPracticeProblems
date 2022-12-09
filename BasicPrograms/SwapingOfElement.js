//Without using third variable
let a = 30;
let b = 20;
console.log('a=' + a);
console.log('b=' + b);
function swapElement(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    console.log('a=' + a);
    console.log('b=' + b);
}
swapElement(a, b);

//using third variable
/*
let x=11;
let y=22;
let temp;
console.log('x=' + x);
console.log('y=' + y);
temp=x;
x=y;
y=temp;
console.log('x=' + x);
console.log('y=' + y);
*/