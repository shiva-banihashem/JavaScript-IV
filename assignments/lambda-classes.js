//Lambda School Assignment     
// CODE here for your Lambda Classes
//Lambda School Assignment     
// CODE here for your Lambda Classes
// ## `lambda-classes` - We need a roster of Lambda School personnel. Build it!

// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.

// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
class Person  {
  constructor(personAttributes) {
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}
  
  const kim = new Person({
    name: 'kim',
    age: 42,
    location: 'Bedrock'
  });

  const shiva = new Person({
    name: 'Shiva',
    age: 37,
    location: 'Dallas'
  });

  const sean = new Person({
    name: 'Sean',
    age: 40,
    location: 'New York'
  });

  

//   #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
   constructor(attr) {
      super(attr);
      this.specialty = attr.specialty;
      this.favLanguage = attr.favLanguage;
      this.catchPhrase = attr.catchPhrase;
   }
   demo(subject) {
    console.log(`Today we are learning about ${subject}`);
   }
   grade(stdobj,subject) {
    console.log(`${stdobj.name} receives a perfect score on ${subject}`) ;
   }
   // Strech Goal here

   stdgrade(stdgradepar) {
     var newgrade = Math.random();
     newgrade < 0.5 ? -newgrade : newgrade;
     return Math.round((stdgradepar + newgrade*100)/2);
   }
};

const instjohn = new Instructor({
    name: 'John',
    age: 37,
    location: 'Bedrock',
    specialty : 'redux',
    favLanguage : 'JavaScript',
    catchPhrase : "Don't forget the homies"
  });

  const instsheena = new Instructor({
    name: 'Sheena',
    age: 37,
    location: 'Plano',
    specialty : 'PeopleSoft',
    favLanguage : 'PeopleCode',
    catchPhrase : 'Laugh out loud'
  });
  

//   #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
class Student extends Person {
    constructor(attr) {
       super(attr);
       this.previousBackground = attr.previousBackground;
       this.className = attr.className;
       this.favSubjects = attr.favSubjects;
       this.grade = attr.grade;
    }
    listsSubjects() {
     console.log(`${this.favSubjects}`);
    }
    PRAssignment(subject) {
     console.log(`${this.name} has submitted a PR for ${subject}`) ;
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`) ;
    }

    //Stretch Goal here

    checkgrade(instrpar){
      if (this.grade > 70 )
      {
        console.log(`Congradulations ${this.name}! You have graduated from Lambda School.`);
      }
      else {
        console.log(`${this.name}! You have to work harder to graduate from Lambda School.`);
        
        this.grade = instrpar.stdgrade(this.grade);
        console.log('updated grade in checkgrade:' + this.grade);
      }
      
    }
 };

 const stdrose = new Student({
    name: 'Rose',
    age: 20,
    location: 'Kansas',
    previousBackground : 'Teacher',
    className :'WEBPT9',
    favSubjects : ['Html', 'CSS', 'JavaScript'],
    grade : 80
  });

  const stdelmer = new Student({
    name: 'Elmer',
    age: 22,
    location: 'Los Angeles',
    previousBackground : 'Student',
    className :'WEBPT9',
    favSubjects : ['Html', 'CSS', 'JavaScript'],
    grade :75
  });

  

//   #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class Teamlead extends Instructor {
   constructor(attr) {
      super(attr);
      this.gradClassName = attr.gradClassName;
      this.favInstructor = attr.favInstructor;
   }
   standUp(channel){
     console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
   }
   debugsCode(stdobj,subject) {
     console.log(`${this.name} debugs ${stdobj.name}'s code on ${subject}`);
   }
}

const tlkim = new Teamlead({
    name: 'Kim',
    age: 30,
    location: 'Austin',
    specialty : 'Web DEV',
    favLanguage : 'HTML',
    catchPhrase : "You shall not pass!" ,
    gradClassName :'WEBPT9',
    favInstructor :'Kathy'
  });
  const tlcharles = new Teamlead({
    name: 'Charlse',
    age: 30,
    location: 'Austin',
    specialty : 'Web DEV',
    favLanguage : 'CSS',
    catchPhrase : "You shall not pass!" ,
    gradClassName :'WEBPT9',
    favInstructor :'John'
  });

  console.log(shiva);
  console.log(kim);
  console.log(sean);
  console.log(instjohn);
  console.log(instsheena);
  console.log(stdrose);
  console.log(stdelmer);
  
  console.log('<<Person Testing begins>>');
  
  kim.speak();
  shiva.speak();
  sean.speak();

  console.log('<<Instructor Testing begins>>'); 
  

  instjohn.speak();
  instjohn.demo("CSS");
  instjohn.grade(stdrose,"CSS");
  instsheena.speak();
  instsheena.demo("Fortran");
  instsheena.grade(stdelmer,"Fortran");  

  
// Strech Goal Testing for Instuctor
  stdrose.grade = instsheena.stdgrade(stdrose.grade);  
  console.log(stdrose);
  stdelmer.grade = instsheena.stdgrade(stdelmer.grade);
  console.log(stdelmer);

  console.log('<<Student Testing begins>>');
  stdrose.speak();
  stdrose.listsSubjects();
  stdrose.PRAssignment('CSS');
  stdrose.sprintChallenge('CSS'); 

  //Stretch Goal Testing for Student
  console.log("before checkgrade Roses's grade:" + stdrose.grade);
  stdrose.checkgrade(instsheena);
  console.log("after checkgrade roses's grade:" + stdrose.grade);
  
  stdelmer.speak();
  stdelmer.listsSubjects();
  stdelmer.PRAssignment('HTML');
  stdelmer.sprintChallenge('HTML'); 

  //Stretch Goal Testing for Student
  console.log("before checkgrade Elmer's grade:" + stdelmer.grade);
  stdelmer.checkgrade(instsheena);
  console.log("After checkgrade Elmer's grade:" + stdelmer.grade);

  console.log('<<Team Lead Testing begins>>');
  tlkim.speak();
  tlkim.demo("CSS");
  tlkim.grade(stdelmer,"Cobol");
  tlkim.standUp("WEBPT11");
  tlkim.debugsCode(stdelmer,"HTML");
  tlcharles.speak();
  tlcharles.demo("CSS");
  tlcharles.grade(stdrose,"HTML");
  tlcharles.standUp("WEBPT9");
  tlcharles.debugsCode(stdrose,"Java");

  //Stretch Goal Testing for Team Lead
  console.log("before grading");
  console.log(stdelmer);
  stdelmer.grade = tlcharles.stdgrade(stdelmer.grade);
  console.log("after grading");
  console.log(stdelmer);
