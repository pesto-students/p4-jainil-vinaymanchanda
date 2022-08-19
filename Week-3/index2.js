
  /*Using bind() to borrow methods from a different object
Using JavaScript bind() for function binding
  https://www.javascripttutorial.net/javascript-bind/

*/

// 1)BIND 
const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
        console.log(this.firstName + " " + this.lastName);
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person.fullName.bind(member);
  
  fullName();

  //2)CALL
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call


  function greet() {
    const reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
    console.log(reply);
  }
  
  const obj = {
    animal: 'cats',
    sleepDuration: '12 and 16 hours',
  };
  
  greet.call(obj);  


  //3)APPLY

  const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2

