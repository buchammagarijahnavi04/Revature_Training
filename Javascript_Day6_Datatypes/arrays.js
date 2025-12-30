//declare an array
//empty array

// let arr1=[];
// arr[0]=11;
// let arr2=[12,13,14]

var fruits=['Mango','straberry','Apple','Banana','pineapple','peach','orange']
// for (let i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }

//for .. in----it will print the indexes
// for (let i in fruits){
//     console.log(`${i}--->${fruits[i]}`)  // along with index and values it will give
// }

//for ......of -----------> it will print the values

// for(let i of fruits){
//     console.log(i)
// }


//forEach() is an array method that is called once on the array

//The callback function passed to forEach() is executed once for each element in the array


// fruits.forEach(function(x,i,ar){
//     console.log(`${i}--->${x}`)
//     console.log(`\nThe array is : ${ar}`)
//     console.log("------------------------------------------")
// })

//Lambda expression
fruits.forEach((x,i)=> console.log(`${i+1}--->${x}`))

var res=fruits.find(x => x==='Apple');

var employess=[
    {name:'janu',age:23},
    {name:'asritha',age:24},
    {name:'seenu',age:26},
    {name:'sandy',age:28},
    {name:'krish',age:29},
]

// var res=employess.find(x => x.name='janu');
var res=employess.filter(x => x.age >= 27);
console.log(res)