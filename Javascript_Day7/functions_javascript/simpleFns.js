// function display(){
//     console.log("Javascript Function with no return type and zero parameter")
// }
// display();
// console.log(display());
// console.log(typeof(display))

// const dis=function display(){
//     console.log("Javascript Function with no return type and zero parameter")
// }
// dis();
// console.log(dis);
// console.log(typeof(dis))

// const max = function(a,b){
//     if(a>b){
//         return a;
//     }
//     else{
//         return b;
//     }
// }
//console.log(max(2,4))

// function display(x){
//     console.log("welcome",x)
// }


// function display(x,y){
//     console.log("From 2 params displaay")
// }

// function display(x,y,z){
//     console.log("From 3 params displaay")  // latest function onlyit will print so this will be function hoiting
// }
// display("Alice");

// console.log(max(2,3));
// console.log(max(4,5));
// console.log("Result", max(5)) //output- Result undefined
// console.log("Result",max(4,5,9)) //Result 5
// display(); //Welcome undefined

// function max(...values){
//     console.log("Is instance of Array: ",  values instanceof Array)
//     var large=values[0];
//     for (let i=0;i<values.length;i++){
//         if(values[i]>large){
//             large=values[i];
//         }
//     }
//     return large
// }
// console.log("max value is ", max(2,5,7,4,2))
// console.log("max value is ", max(45,74,25))
// var arr=[[6,7,8,3,7,8,9][7,8,9,4]]
// console.log("max value is",max (arr))
// console.log("max value is",max (...arr))


// function display(name,city, ...items){
//     console.log(`${name} purchased ${items.length} from ${city}`)
// }

// display("Alice","Chennai",34,56,78,87)
// display("janu","hyderabad",34,56,77,87)
// display("sandy", 6,7,8,9)


// function greet(...names){
//     console.log("Hello!", names.join(','));
// }
// greet("Alice")
// greet("Janu","Reena")


//Function by using default parameter
// function greet(name, role='Guest'){
//     console.log(`welcome ${name} Role is ${role}`);
// }
// greet('Alice','Manager')
// greet('Bob')


//Nested functions
function sortByTitle(books){
    const byTitle = function(book1,book2){
        return book1.title.localeCompare(book2.title)
    }
    return books.slice().sort(byTitle)
}
const books=[
    {title : "Tale of two cities", author : "Leo tolstoy"},
    {title : "pride and prejudice", author : "Jane Austin"},
    {title : "the great story", author : "F . Scott Fitzge"},
    {title : "Jahnavi of two cities", author : "Rabin"},
    {title : "Sandgy of two cities", author : "Geogre Orwell"},

]


function sortByTitle(books,ascending=true){
    const multiplier = ascending ? 1:-1;
    const byTitle = function(book1,book2){
        return book1.title.localeCompare(book2.title) * multiplier
    }
    return books.slice().sort(byTitle)
}

console.log(sortByTitle(books, false))



//Multiple default parameters

function fetchData(id, 
    location ={ host : `localhost`,port:443},
    uri='employees') {
        console.log(`Fetch data from  
            https://${location.host}:${location.port}/${uri}/${id}`)
 
}
fetchData(101);
fetchData(100,{host:`127.0.0`,port:3000},'products')