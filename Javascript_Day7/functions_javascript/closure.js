//A closure is the combination of a function and the lexical environment within which that function was declared, allowing the function to retain access to variables from its outer (enclosing) scope even after the outer function has finished executing. 
// Example: A Private Counter
// A common use case for closures is to create functions with private variables, which are not accessible from the outside scope. 
// javascript

// function createCounter() {
//   let count = 0; // This is a "private" variable

//   return function increment() {
//     count++;
//     console.log(`Current count: ${count}`);
//   };
// }

// const counter = createCounter();
// counter(); // Output: Current count: 1
// counter(); // Output: Current count: 2
// counter(); // Output: Current count: 3


(function (){
    console.log("Its called as soon as declared")
})();
(() => console.log("From lambda IIFE"))();
