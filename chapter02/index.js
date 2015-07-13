/*---------------------    EXPRESSIONS AND STATEMENTS    ---------------------*/

// Expressions 1
// Make the function return a nested expression (use parentheses) whose
// evaluated value is not undefined.
Exer.expressions1 = function () {

  return (2 * 2 ) ;

};

/* jshint ignore:start */
// Statements 1
Exer.statements1 = function () {

  !true;
  // Write a statement that is not undefined.

};
/* jshint ignore:end */

/*-----------------------------    VARIABLES    ------------------------------*/

// Variables 1
Exer.variables1 = function () {

  // Write a statement that declares a variable.

  // Return that variable.

  var price1  ;
  return price1 ;
};

// Variables 2
Exer.variables2 = function () {

  // Write a statement that declares a variable.

  // Write a statement to assign a number value to your variable.

  // Return the variable.
  var carprice;
  carprice = 1000;
  return carprice;


};

// Variables 3
Exer.variables3 = function () {

  // Write a statement that declares a variable and initializes it to a string.

  // Return the variable.
  var hText = "This is just some text";
  return hText;


};

// Variables 4
Exer.variables4 = function ( n ) {

  // Return the parameter.
  return(n);

};

// Variables 5
Exer.variables5 = function ( n ) {

  // Declare a new variable and initialize it to the value of `n`.

  // Return the new variable.
  var soda = n ;
  return soda;
};

// Variables 6
Exer.variables6 = function ( stacys ) {

  // You have 3 apples
  // (declare a variable named `apples` and initialize it to `3`)

    var apples =  3;
  // Stacy gives you more apples
  // (the parameter `stacys`)

  // Return the total number of apples you have.
   return apples + stacys;
};

// Variables 7
// You have a certain amount of pocket change given by the parameter provided
Exer.variables7 = function ( change ) {

  // You find a quarter.
  change = change + .25 - .10;
  change = "$" + change;
  return change;
  // Then you spend a dime on old fashioned candy.
  
  // How much money do you have now?
  //I have 15 cents 
  // Use type coercion to turn your pocket change into a string add a dollar
  // sign to the beginning.
 
  // Return that string.
 

};


/*--------------------    KEYWORDS AND RESERVED WORDS    ---------------------*/

// Keywords 1
// Uncomment the following function by removing the slash-asterisk pairs.
// Fix the function so no keywords or reserved words are improperly used.

Exer.keywords1 = function ( truer, two ) {
  var newer = 2;
  var consts = two+2;
  truer += "2";
  var afunction = newer + consts + truer + two;
  return afunction;
};


/*--------------------------    THE ENVIRONMENT    ---------------------------*/

// Enviroment 1
// Uncomment the line that does not return an evironment variable.
Exer.environment1 = function () {

  // return window;
  // return document;
  // return history;
  return browser;
  // return navigator;

};

/*------------------------------    FUNCTIONS    -----------------------------*/

// Functions 1
// Call setPowerLevel and pass it a value over 9000.
// Call cornTortilla and pass it the values "chicken", "queso", "bacon", and
// "lime".
Exer.functions1 = function (recombobulate, setPowerLevel, cornTortilla) {

  // Your work here 
  recombobulate();
  setPowerLevel(90000);
  cornTortilla("chicken","queso","bacon","lime");
  
};


/*----------------------    THE CONSOLE.LOG FUNCTION    ----------------------*/

// Console 1
Exer.console1 = function () {

  // Output something to the console.
    console.log("shoot");
};

// Console 2
Exer.console2 = function ( printme ) {

  // Print the parameter `printme` to the console.
  console.log(printme)
};

// Console 3
// Use the provided parameter `data` and string concatenation to output
//     The magic word is "xxxxx"
// to the console, where the `xxxxx` is the value provided in `data`. Do not
// change the value of the variable `data`.
Exer.console3 = function ( data ) {

  console.log("The magic word is \"" + data + "\"");
  // your answer here

};

// Console 4
Exer.console4 = function () {

  // Use comma-separated values to output two things to the console with one
  // call.
console.log(31,90);

};

// Console 5
// Do not change the value of the variable `y`.
Exer.console5 = function ( x, y ) {

  // Output the first parameter `x` to the console.

  // Make the function return the parameter `y` plus 1.
  console.log(x);
  return y + 1;
};

/*---------------------------    RETURN VALUES    ----------------------------*/

// Return 1
// Call and log out the result of `magicFunc`.
Exer.return1 = function () {

  // your work goes here
  console.log(magicFunc());
};

// Return 2
// Call and return the result of `magicFunc`.
Exer.return2 = function () {

  // your work goes here
  return magicFunc();
};

// Return 3
Exer.return3 = function () {

  // Call `strShift` with the argument "abczABCZ". Log the result.
  var crap = strShift ("abczABCZ");
  console.log(crap);
  return crap + "123";
  // Return that same result with "123" concatenated to the end.

};

// Return 4
// Log the result of the string concatenation of two separate calls to
// `magicFunc`.
Exer.return4 = function () {
  console.log(magicFunc() + "" + magicFunc());
  // your work goes here

};

// Return 5
// Shift the string "abcABC123!@#" with strShift.
// Shift the string "a S d F j K l" with strShift twice.
// Return the result of these two shifted strings passed into `strShuffle` with
// the first string as the first argument and the second string as the second
// argument.
Exer.return5 = function () {
  
  // Declare and initialize a variable for the first string.
  var finger=strShift("abcABC123!@#");
  // Declare and initialize a variable for the second string.
  var whatever=strShift(strShift("a S d F j K l"));
  // A return statement.
  return strShuffle(finger,whatever);
};

/*-------------------------    PROMPT AND CONFIRM    -------------------------*/

// Prompt 1
// Call prompt with the string and return the result.
Exer.prompt1 = function () {

  // Your work here
  var light = prompt("What is the answer to the meaning of life, the universe, and everything?","42");
  return light;
};

// Confirm 1
// Call confirm with the string and return the result.
Exer.confirm1 = function () {

  // Your work here
var bitch = confirm("Imma let you finish, but Javascript is one of the best programming languages of all time...one of the best programming languages of all time!");
return bitch;
};

/*----------------------------    CONTROL FLOW    ----------------------------*/

// Control 1
Exer.control1 = function () {

  // Use prompt to get a number from a user
  var free = prompt("pick a number","");
  console.log(free);
  // Print that number to the console

};

// Control 2
Exer.control2 = function ( bar ) {

  // Declare a variable named `foo`.
  var foo;
  // Initialize `foo` with a string.
  foo = "bye";
  // Log `foo` to the console.
  console.log(foo);
  // Concatenate the parameter `bar` to be beginning and end of `foo`
  // Save the result in a new variable called `ding`.
  var ding = bar + foo + bar;
  // Call `strReverse` and pass it `ding` (as an argument).
  // Send the result to the user in a confirm window.
  // Save the user's response in a new variable called `quux`.
  var quux = confirm(strReverse(ding));
  // Return the opposite of `quux`.
  return !quux;
};

/*-----------------------    CONDITIONAL EXECUTION    ------------------------*/

// Conditional 1
// Expect `isSerious` to be a boolean
Exer.condition1 = function ( isSerious ) {

  console.log( "Welcome to Camelot!" );
  if (isSerious==false) {
    console.log("On second thoughts, let's not go to Camelot. It is a silly place.");
  }
  // If `isSerious` is false, output the message:
  //     On second thoughts, let's not go to Camelot. It is a silly place.

};

// Conditional 2
// Expect `temperature` to be a number
Exer.condition2 = function ( temperature ) {

  // If temperature is greater than or equal to 70
  // Then output:
  //     Hermit crab warning!
  if(temperature >= 70) {
    console.log("Hermit crab warning!");
  }else if(temperature<70) {
    console.log("Catch of the day: influenza, $14/lb.");
  }
    console.log("Thanks for visiting Pier One and Three Quarters!");
  // Otherwise, output
  //     Catch of the day: influenza, $14/lb.

  // In either case, also print
  //     Thanks for visiting Pier One and Three Quarters!

};

// Conditional 3
// Expect `whatDay` to be a string
Exer.condition3 = function ( whatDay ) {

  // Declare and initialize `luckyNumber`
  var luckyNumber=7
  // If the length of `whatDay` is 6 or less...
  if(whatDay.length<=6) {
  luckyNumber += "!";
  }
  if(whatDay=="Mannersday") {
  return luckyNumber+4;
  }else if (whatDay=="Foosday") {
  return luckyNumber+2;
  }else if (whatDay=="Heyday") {
  return luckyNumber+luckyNumber.charAt(0);
  }else {
  luckyNumber=Infinity;
  return luckyNumber;
  }
  // If `whatDay` is "Mannersday"...
  // If `whatDay` is "Foosday"...
  // If `whatDay` is "Heyday"...
  // Otherwise...

  // Return `luckyNumber`

};

// Conditional 4
Exer.condition4 = function () {

  // Prompt the user
  var crazy=prompt("Enter today's date, please.");
  if(typeof crazy!="number" || isNaN(crazy)) {
   console.log("What do you think this is, bub? Wonderland?");
   }else if(crazy<1) {
      console.log("Negativelaaaaaaand~!");
   }else if(crazy>31) {
      console.log("Are they paying you overtime for this?");
   }else if(crazy>=29 && crazy <=31) {
      console.log("I sure hope it isn't February.");
   }else {
      console.log("Did you know? There are exactly " + crazy + " ways to make today awesome!");
  }
  // If the user's input is not a number...
  // Otherwise...
    // If the user's input is less than 1...
    // If the user's input is greater than 31...
    // If the user's input between 29 and 31, inclusive...
    // Otherwise...
    
}

/*----------------------    WHILE AND DO WHILE LOOPS    ----------------------*/

// While 1
// Turn the code in the function into a while loop.
Exer.while1 = function () {
  
var brain=10;
while (brain>=1){
 console.log(brain+" sheep");
 brain=brain-1;
}
};

/* jshint ignore:start */
// While 2
// Recreate the code in the function without a loop
Exer.while2 = function () {
 

  console.log("I'm melting!");
  console.log("m melting!");
  console.log("melting!");
  console.log("lting!");
  console.log("ing!");
  console.log("g!");
  console.log("What a world!");
};
/* jshint ignore:end */

// doWhile 1
// Turn the code in the function into a single do while loop.
// Hint: 0, 1, and 2 are remainders from dividing numbers by 3.
Exer.doWhile1 = function () {

  var cup=0;
  do {
    var chair=cup%3;
    ++cup;
    console.log(chair);
  }while (cup<6);

};

/* jshint ignore:start */
// doWhile 2
// Recreate the code in the function without a loop
Exer.doWhile2 = function () {
  var trainNum = 1;

    console.log("Train# 1: In flight!?");
    console.log("Train# 2: In flight!?");
    console.log("Train# 3: In flight!?");
    console.log("Train# 4: In flight!?");
    console.log("Train# 5: In flight!?");
    console.log("Train# 6: In flight!?");
    console.log("Train# 7: In flight!?");

};
/* jshint ignore:end */

/*---------------------------    INDENTING CODE    ---------------------------*/

// Indenting 1
// Correctly indent the following code block using TWO spaces for each block
Exer.indenting1 = function() {
  var firstName = "Zachery";
  var lastName = "Moneypenny";
  if(firstName === "Zachery") {
    lastName = "Johnson";
  }
};

// Indenting 2
// Correctly indent the following code block using FOUR spaces for each block
Exer.indenting2 = function() {
    var firstName = "Penny";
    var lastName = "Moneywhistle";
    if(firstName === "Penny") {
        lastName = "Johnson";
    }
};

/*-----------------------------    FOR LOOPS    ------------------------------*/

// For 1
// Rewrite the loop as a linear sequence of statements.
Exer.for1 = function () {

console.log("...");
console.log("    ...AA")
console.log("        ...AAAA")
console.log("            ...AAAAAA")
console.log("                ...AAAAAAAA")
console.log("                    ...AAAAAAAAAAH!")


};

/* jshint ignore:start */
// For 2
// Rewrite the repetative code with for loops.
Exer.for2 = function () {

for (var germ=0; germ<2;++germ) {
  console.log("Hi!");
  var cup="My name is";
  for (var brisk=0; brisk<3;++brisk) {
    console.log(cup);
  }
  console.log("Slim Shady");
}
};
/* jshint ignore:end */

// For 3
// Write a loop that counts backwards from 20 to 5 and prints the number and
// "even" if the number is even and "odd" if the number is odd.
Exer.for3 = function () {
  for (var i = 20; i >=5; i--){
    if (i % 2 ==0){
      console.log(i, "even");
    }
    else{
      console.log(i, "odd")
    }
  }

};

/*-----------------------    BREAKING OUT OF A LOOP    -----------------------*/

// Breaking 1
// Use a break to stop this infinite loop
Exer.breaking1 = function(yeng) {

  while(yeng()) {
    break;
  }

};

// Breaking 2
// Every time theatre.current() is called it returns a string, break when that string is
// "Electric Boogaloo!"
Exer.breaking2 = function(theatre) {

  while (theatre.next()) {
    console.log(theatre.current());
    if (theatre.current() === "Electric Boogaloo!") {
      break;
    }
  }

};

/*-------------------    UPDATING VARIABLES SUCCINCTLY    --------------------*/

// Succinct 1
Exer.succinct1 = function ( kiwis ) {

  kiwis *= 4;
  kiwis -= 2;
  kiwis /= 2;
  kiwis += " handsomely hirsute kiwis";
  return kiwis;

  // Quadruple kiwis.

  // Reduce kiwis by 2.

  // Halve kiwis.

  // Concatenate " handsomely hirsute kiwis" to kiwis.

  // Return kiwis.

};

// Succinct 2
// Edit the for loop to use the incrementation operator.
Exer.succinct2 = function () {

  for ( var hippo = 2; hippo <= 10; ++hippo) {
    console.log( hippo + "! " + hippo + " fluttering hippos! Ah ah ah ah ah!" );
  }

};

// Succinct 3
// Correct the decrementation operator error.
Exer.succinct3 = function () {

  var message = "Reverse me!";
  var pointer = message.length;
  while( pointer > 0 ) {
    console.log( message.charAt( --pointer) );
  }

};

/*-----------------    DISPATCHING ON A VALUE WITH SWITCH    -----------------*/

// Switch 1
Exer.switch1 = function ( animal ) {

  var output = 'The ' + animal + ' goes "';

  // Create a switch that dispatches on the parameter `animal`.
  // In each case, concatenate the correct response to end of the `output`
  // string.

    switch(animal) {
      case "cow":
      output+="foo";
      break;
      case "sheep":
      output+="bar";
      break;
      case "duck":
      output+="quux";
      break;
      default:
      output+="ring-a-ding-ding-dingding-ding-a-ding-ding"
    }  
  
  output += '"!';
  console.log(output);
};

/*---------------------------    CAPITALIZATION    ---------------------------*/

/* jshint ignore:start */
Exer.capitalization1 = function() {

  var zero = 0;
  var happyCat = new String("How did this get here! I'm not good at computer!");
  for (var index = 0; I < happyCat.length; index++) {
    if (index % 4 == zero) {
      console.log(happyCat);
    }
  }
};

/*------------------------------    COMMENTS    ------------------------------*/

Exer.comments1 = function ( war, missiles, wood, sheep, brick ) {

  if ( war ) {
    if ( missiles ) {
      // missiles.launch();
    } else {
      cower();
      // wheat is cool.
    }
  } else {
    if ( wood ) {
      wood.trade( sheep, 1 );
    } else if ( sheep ) {
      sheep.trade( wood, 3 );
    } else {
      brick.buy(2);
      // I love bandits!.
    }
  }

};

Exer.comments2 = function () {

/*     *     *     *     *
 *    * *   * *   * *   * *
  *  *   * *  *  *   * *   */

};