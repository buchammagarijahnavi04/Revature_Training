class Person {
    constructor(firstName,lastName="joe"){
        this.firstName=firstName;
        this.lastName=lastName;
    }


    display(){
        console.log(`FullName : ${this.firstName}, ${this.lastName}`)
    }
}

let p1=new Person("Alice","Henry");
p1.display();
let p2 = new Person("Thomas", "Edison")
p2.display();
p2.lastName='Alwa'
p2.display();
let p3=new Person("Sam")
p3.display()

