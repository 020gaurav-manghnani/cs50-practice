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
     traverse(val){
         var current=val;
         while(current===val){
             console.log(current.val);
             current=current.next;
         }
        
     }
 }

 let list=new Student();
 list.traverse("hello");
 list.traverse("world");
 list.traverse("!");


 
