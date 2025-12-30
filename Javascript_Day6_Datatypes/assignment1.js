// Create the below pattern
//  *
//  **
//  ***
//  ****
//  *****

// let a = "*";
// for (let i=0;i<=5;i++){
//     console.log(a.repeat(i));
// }

//  2. Create the below pattern

//  1****
//  12***
//  123**
//  1234*
//  12345

// let row=5
// for (let i=0;i<=row;i++){
//     console.log(i+1)

// }


// let rows = 5;

// for (let i = 1; i <= rows; i++) {
//   let line = "";

//   // print numbers
//   for (let j = 1; j <= i; j++) {
//     line += j;
//   }

//   // print stars
//   for (let k = 1; k <= rows - i; k++) {
//     line += "*";
//   }

//   console.log(line);
// }

//  3. Write a loop that counts from 1 to 100 and checks if the number is a multiple of 3 or 5. If it’s a multiple of 3, it should log “Fizz” to the console.
// If it’s a multiple of 5, it should log “Buzz” to the console. If it’s a multiple of 3and 5, it should log “FizzBuzz” to the console, and if it’s a multiple of neither,
//  it should just log the number to the console. The initial output should look something like this:
// << 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14,FizzBuzz, ...


// for(let i=1;i<=100;i++){
//     if(i % 3==0 || i % 5==0){
//         console.log("Fizz");
//     }
//     else if(i % 5==0){
//         console.log("Buzz");
//     }
//     else if(i % 3==0 && i % 5==0){
//         console.log("FizzBuzz");
//     }
//     else{
//        console.log(i) 
//     }
// }

let result = "";

for (let i = 1; i <= 100; i++) {

  if (i % 3 === 0 && i % 5 === 0) {
    result += "FizzBuzz, ";
  } 
  else if (i % 3 === 0) {
    result += "Fizz, ";
  } 
  else if (i % 5 === 0) {
    result += "Buzz, ";
  } 
  else {
    result += i + ", ";
  }

}

console.log(result);
