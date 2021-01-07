// Created By: Jacob Bonner
// Created On: January 2021
// This program solves the Towers of Hanoi algorithm.

// Defining prompt for getting user input
const prompt = require('prompt-sync')({sigint: true});

function solveTowers(diskNumber, fromRod, toRod, spareRod) {
  if (diskNumber > 0) {
    // Calling the solving function again
    solveTowers(diskNumber - 1, fromRod, spareRod, toRod);

    // Moving the top disk from one rod to another
    toRod.push(fromRod[fromRod.length - 1]);
    fromRod.splice(fromRod.length - 1, 1);

    // Printing the disks on rod A
    let rodText = "Rod A: ";
    for (let fromCounter = 0; fromCounter < fromRod.length; fromCounter++) {
      rodText = rodText + fromRod[fromCounter] + ", ";
    }
    rodText = rodText + "     ";

    // Printing the disks on rod B
    rodText = rodText + "Rod B: ";
    for (let toCounter = 0; toCounter < toRod.length; toCounter++) {
      rodText = rodText + toRod[toCounter] + ", ";
    }
    rodText = rodText + "     ";

    // Printing the disks on rod C
    rodText = rodText + "Rod C: ";
    for (let spareCounter = 0; spareCounter < spareRod.length; spareCounter++) {
      rodText = rodText + spareRod[spareCounter] + ", ";
    }
    console.log(rodText);

    // Calling the solving function again
    solveTowers(diskNumber - 1, spareRod, toRod, fromRod);
  }
}

try {
  // User input for how many disks there are in the game
  const userInput = prompt("How many disks in your Towers of Hanoi game: ");

  // Ensuring the user's input is a number
  const userDisks = parseFloat(userInput, 10);

  // Printing a note about the disks
  console.log("NOTE: Larger numbers represent larger disks");
  console.log("");

  if (userDisks < 1) {
    // Throwing that the number entered is not a valid number of disks
    throw "ERROR: Cannot solve Towers of Hanoi, invalid number of disks";
  } else if (Number.isInteger(userDisks) == false) {
    // Throwing that the user entered an input that was not an integer
    throw "ERROR: Invalid Input";
  } else {
    // Initializing lists that will be used for the rods
    const firstArray = [];
    const secondArray = [];
    const thirdArray = [];

    // Adding numbers to one of the arrays to represent disks
    for (let counter = 0; counter < userDisks; counter++) {
      firstArray.push(userDisks - counter);
    }

    // Calling the function that will solve the algorithm
    solveTowers(userDisks, firstArray, secondArray, thirdArray);
  }

  // Printing that a solution was found
  console.log("");
  console.log("Towers of Hanoi Successfully Solved");

  // Catches and tells the user what error occured
} catch (err) {
  console.log("");
  console.error(err);
}
