// //creating class using class keywrd

// class Student{
//     constructor(firstName,lastName,year){
//         this.Fn=firstName;
//         this.Ln=lastName;
//         this.grade=year;
//     }
// }

// //creating object using new keyword

//  let one=new Student("gauav","manghnani",3);
//  let two=new Student("gaurav1","manghnani",4);
//  console.log(one,two);

 //
 class Student{
     constructor(firstName,lastName,year) {
         this.fn=firstName;
         this.ln=lastName;
         this.grade=year;
     }
     fullname(){
         console.log(`your full name is ${this.fn} ${this.ln}` );
     }
 }

 let one=new Student("gaurav","manghnani");
 let two=new Student("agrwal","manghnani")
 one.fullname();
