//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
var name = “chris”

if (name === “chris”) {
  console.log(“true”);
}
else {
  console.log(“not true”);
}


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here

var getName = prompt("What's your name?", "Chris");

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here

var getName = prompt("What's your name?", "Chris");
alert ("Welcome " + getName);

//Next problem




//What is the difference between arguments and parameters?

  //Answer Here

the parameters are the aliases of the values that will be passed to the function. The arguments are the actual values

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here

false, full, 0, NaN, “”, undefined

//Next Problem



//Create a function called myName that returns your name

  //Code Here

function myName() {
}
myName();

//Now save the function definition of myName into a new variable called newMyName

  //Code Here

function myName() {
  var newMyName = myName();
  return myName
}
myName();


//Now alert the result of invoking newMyName



//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

var foo = function(){
  
  return function (){
    return 5;
  };
}

var bar = foo();
console.log(bar())



//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here



//Now invoke innerFn.