// function sqrt(n){
//     return n*n;
// }
// const sqrt = n => n*n ;

// console.log(sqrt(6)); 

// Arrow function
// const add = (x,y) => x+y ;

// console.log('Add result', add(6,5)); 


// function factorial(num){
//     let product=1;
//     for(let i=1; i <=num ;i++){
//         product *= i;
//     }
//     return product;
// }
// console.log("factiorial", factorial(18))

// const factiorial=(num)=>{
//     let product=1;
//     for(let i=1; i <=num ;i++){
//         product *= i;
//     }
//     return product;
// }
// console.log("factiorial", factiorial(8))

// //Finding the power oof the number
// const power = (num,expo=2) => Math.pow(num,expo)
// console.log("Power" + power(5))
// console.log("Power" + power(5,3))

// ----------------------------------------------------------------
//call back funtion
// var arr = [1,2,3,4,5];
// var res  = arr.map(e => e*10);
// console.log(res);


// function greet(msg){
//     return;  msg
// }

// function display(name,greet,msg){
//    console.log(`Hello ${name} ${greet(msg)}`)
// }

// function sayThankyou(msg){
//     return "Thank you for the visit" + msg
// }

// function welcome(msg){
//     return "welcome "+msg
// }
// display('Alice' , welcome , 'To our website')
// display('Bob' , sayThankyou, 'for the feedback')
// display('Leo', (x) =>"You Purchased" + x , 'A bag')

// function arithmeticOp(fn ,x ,y  ){
//       return fn(x,y)
// }

// var res = arithmeticOp((x,y) => x+y , 12, 13)
// console.log("Result of the output is", res)


function normalFn(){
    console.log('From normal function***\n' , this)
}
normalFn();
const arrowFn = () => console.log("This in arrow fn ",this)
console.log("-----------------------------")
arrowFn();

// const obj={
//     normalFn: function(){
//         console.log('From normal function***\n', this)
//     }
//     arrowFn: () => console.log("This is in arrow", this)
// }
// obj.normalFn();
// obj.arrowFn();