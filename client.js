const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

$( document ).ready(readyNow);

function readyNow() {
  $( '#bonusButton').on( 'click', listEmployees );
}

function listEmployees () {
}

let newEmployees = [];

function bonusCalculator(employeeArray){
  for (i=0; i<employeeArray.length; i++){
    newEmployees.push(newWorker(employeeArray[i]));
  }
}

function newWorker (worker) {
  let newWorker = {};
  newWorker.name = worker.name;
    

    // Review rating of 2 or less
  if (worker.reviewRating <= 2) {
      newWorker.bonusPercentage = 0;
      if (worker.employeeNumber.length === 4){
        newWorker.bonusPercentage += .05;
      }
      if (Number(worker.annualSalary) > 65000 && newWorker.bonusPercentage > 0) {
        newWorker.bonusPercentage -= .01;
      }
      newWorker.totalBonus = Math.round(Number(worker.annualSalary) * newWorker.bonusPercentage);
      newWorker.totalCompensation = Number(worker.annualSalary) + newWorker.totalBonus;
      
  } 

    // Review rating of 3
  else if (worker.reviewRating === 3) {
      newWorker.bonusPercentage = .04;
      if (worker.employeeNumber.length === 4) {
        newWorker.bonusPercentage += .05;
      }
      if (Number(worker.annualSalary) > 65000) {
        newWorker.bonusPercentage -= .01;
      }
      newWorker.totalBonus = Math.round(Number(worker.annualSalary) * newWorker.bonusPercentage);
      newWorker.totalCompensation = Number(worker.annualSalary) + newWorker.totalBonus;
  }
    
    // Review rating of 4
    else if (worker.reviewRating === 4) {
      newWorker.bonusPercentage = .06;
      if (worker.employeeNumber.length === 4) {
        newWorker.bonusPercentage += .05;
      }
      if (Number(worker.annualSalary) > 65000) {
        newWorker.bonusPercentage -= .01;
      }
      newWorker.totalBonus = Math.round(Number(worker.annualSalary) * newWorker.bonusPercentage);
      newWorker.totalCompensation = Number(worker.annualSalary) + newWorker.totalBonus;
    } 
    
    // Review rating of 5
    else if (worker.reviewRating === 5 ) {
      newWorker.bonusPercentage = .1;
      if (worker.employeeNumber.length === 4){
        newWorker.bonusPercentage += .05;
      }
      if (Number(worker.annualSalary) > 65000){
        newWorker.bonusPercentage -= .01;
      }
      if (newWorker.bonusPercentage > .13){
        newWorker.bonusPercentage = .13;
      }
      newWorker.totalBonus = Math.round(Number(worker.annualSalary) * newWorker.bonusPercentage);
      newWorker.totalCompensation = Number(worker.annualSalary) + newWorker.totalBonus;
    }
    console.log(newWorker);
    return newWorker;
}

// Run the Function to test the variables.
bonusCalculator(employees);





