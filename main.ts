//////////////// Step 1: Create a blank array////////////////////////////
let myWork: { name: string, status: boolean }[] = [];

// Step 2: Use a loop to create lessons
for (let i = 1; i <= 10; i++) {
    // Step 2a: Create an object representing a lesson
    const lessonName = `Lesson ${i}`;
    // Step 2b: Use ternary operator to set status property based on whether lesson number is odd or even
    const lessonStatus = i % 2 === 0 ? false : true;
    // Step 2c: Create the lesson object
    const lesson = { name: lessonName, status: lessonStatus };
    // Step 3: Add the lesson to the array
    myWork.push(lesson);
}

// Step 4: Print the result
console.log(myWork);


//////////////////////////////  QUESTION NO 2  "GUESSSING GAME"////////////////////////////

// Step 1: Set the maximum value
const maxValue: number = 10;

// Step 2: Generate a random number
const randomNumber: number = Math.floor(Math.random() * maxValue) + 1;
console.log("Random number:", randomNumber);

// Step 3: Track the guess status
let correctGuess: boolean = false;

// Step 4: Predefined guesses
const guesses: number[] = [3, 7, 5, 9];

// Step 5: Iterate over guesses
let i: number = 0;
while (!correctGuess && i < guesses.length) {
  const currentGuess: number = guesses[i];
  
  // Step 6: Check the user's guess
  if (currentGuess === randomNumber) {
    console.log("Congratulations! You guessed the correct number:", currentGuess);
    correctGuess = true;
  } else if (currentGuess < randomNumber) {
    console.log("Too low! Try again with a higher number.");
  } else {
    console.log("Too high! Try again with a lower number.");
  }
  
  i++;
};


//////////////// QUESTION 3 "COUNTER INCREMENTOR (USING DO WHILE LOOP )"//////////////

let counter: number = 0; // Step 1: Set the starting counter to 0
const step: number = 5; // Step 2: Create a variable to increase the counter by

// Step 3 & 4: Add a do...while loop to increment the counter until it reaches 100
do {
    console.log("Counter: " + counter);
    counter += step;
} while (counter <= 100);


//////////////////// QUESTION NO 4  "EXPLORING OBJECTS WITH FOR...IN LOOP" ///////////////

// Step 1: Create the object
const myObject = {
    item1: "Apple",
    item2: "Banana",
    item3: "Orange",
  };
  
  // Step 2: Use a for...in loop to iterate through the properties
  for (let property in myObject) {
    console.log(`Property: ${property}, Value: ${myObject[property as keyof typeof myObject]}`);
  }
  

////////////// QUESTION NO 5 "EXPLORING ARRAYS WITH LOOPS(Using loop )"////////////
  
  // 1. Create an empty array
let myArray: number[] = [];

// 2. Run a loop 10 times, adding a new incrementing value to the array
for (let i = 1; i <= 10; i++) {
  myArray.push(i);
}

// 3. Log the array into the console
console.log(myArray);

// 4. Use the for loop to iterate through the array
for (let i = 0; i < myArray.length; i++) {
  console.log(`Index: ${i}, Value: ${myArray[i]}`);
}

// 5. Use the for...of loop to output the value into the console from the array
for (let value of myArray) {
  console.log(value);
}

  
  
