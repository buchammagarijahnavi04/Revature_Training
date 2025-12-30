class Person {
    #firstName;
    #lastName
    #marks
    constructor(firstName,lastName,marks=0){
        this.#firstName=firstName;
        this.#lastName=lastName;
        this.#marks=marks
    }

   set marks(newMark){
    if(newMark > 0){
    this.#marks=newMark
    }
    // else{
    //     throw new Error("Marks cannot have negative value ")
    // }
   }
   get marks(){
    return this.#marks
   }
    display(){
        console.log(`FullName : ${this.#firstName}, ${this.#lastName} , Marks:${this.#marks}`)
    }
    get fullName(){
        return this.#firstName + " . " +this.#lastName;
    }
}

let p1=new Person("Alice","Henry");
p1.display();
let p2 = new Person("Thomas", "Edison")
p2.display();
p2.lastName='Alwa'
p2.display();
console.log(p1.firstName)
p2.marks=78;
console.log(p2.marks)
p2.display();

Person.prototype.introduce=function(){
    console.log("Hai I am ", this.fullName)
}
p2.introduce();

