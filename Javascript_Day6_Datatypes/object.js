let student={
    name:'Alice',
    age:24,
    marks:100,

    display: function(){
        console.log(`Name ${this.name}, Age: ${this.age} Marks:${this.marks}`)
    }


}
console.log(student);
console.log(JSON.stringify(student))