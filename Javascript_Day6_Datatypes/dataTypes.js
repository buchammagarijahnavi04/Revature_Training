//Global Scope
let a=10;
var b=100;


// In side Function Scope
function sample(){
    let x='xxx'
    let y='yyy'
     console.log("Inside function x is:" + x )
    console.log("Inside function y is:" + y )
    console.log("Inside function a is:" + a )
    console.log("Inside function b is:" + b )

}
// sample()
// //console.log("Outside function x is:" + x )
// // console.log("Outside function y is:" + y )
// console.log("Outside function a is:" + a )
// console.log("Outside function b is:" + b )

{
    let x='xxx' // block scope
    var y='yyy' 
    console.log("Inside function x is:" + x )
    console.log("Inside function y is:" + y )
}
console.log("Outside function y is:" + y )

for (var i=1;i<5;i++){
    console.log(i)
}
console.log("Outside block i" , i)  // let will through an error outside the block and var will not through an error