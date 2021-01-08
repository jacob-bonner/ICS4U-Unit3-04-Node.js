// Created By: Jacob Bonner
// Created On: January 2021
// This program solves the Towers of Hanoi algorithm.

// Defining prompt for getting user input
const prompt = require('prompt-sync')({sigint: true});

function solveTowers(diskNumber, fromRod, toRod, spareRod) {
  // Checking if there is a disk on every rod
  if (diskNumber == 1) {
    // Moving the top disk from one rod to another
    console.log("Moving disk 1 from rod", fromRod, "to rod", toRod);
    return;
  }

  // Calling the solving function again
  solveTowers(diskNumber - 1, fromRod, spareRod, toRod);

  // Printing the move that was taken
  console.log("Moving disk", diskNumber, "from rod", fromRod, "to rod", toRod);

  // Calling the solving function again
  solveTowers(diskNumber - 1, spareRod, toRod, fromRod);
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
    // Calling the function that will solve the algorithm
    solveTowers(userDisks, 'A', 'C', 'B');
  }

  // Printing that a solution was found
  console.log("");
  console.log("Towers of Hanoi Successfully Solved");

  // Catches and tells the user what error occured
} catch (err) {
  console.log("");
  console.error(err);
}
