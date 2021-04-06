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

let newEmployees = [];

function bonusCalculator(){
  for (i=0; i<employees.length; i++){
    let worker = {};
    worker.name = employees[i].name;
    if (employees[i].reviewRating <= 2) {
      worker.bonusPercentage = 0;
      if (employees[i].employeeNumber.length === 4){
        worker.bonusPercentage += .05;
      }
      worker.totalBonus = 0;
      worker.totalCompensation = Number(employees[i].annualSalary);
    } 
    else if (employees[i].reviewRating === 3) {
      worker.bonusPercentage = .04;
      if (employees[i].employeeNumber.length === 4){
        worker.bonusPercentage += .05;
      }
      worker.totalBonus = Number(employees[i].annualSalary) * worker.bonusPercentage;
      worker.totalCompensation = Number(employees[i].annualSalary) + worker.totalBonus;
    }
    else if (employees[i].reviewRating === 4) {
      worker.bonusPercentage = .06;
      if (employees[i].employeeNumber.length === 4){
        worker.bonusPercentage += .05;
      }
      worker.totalBonus = Number(employees[i].annualSalary) * worker.bonusPercentage;
      worker.totalCompensation = Number(employees[i].annualSalary) + worker.totalBonus;
    } 
    else if (employees[i].reviewRating === 5 ) {
      worker.bonusPercentage = .1;
      if (employees[i].employeeNumber.length === 4){
        worker.bonusPercentage += .05;
      }
      worker.totalBonus = Number(employees[i].annualSalary) * worker.bonusPercentage;
      worker.totalCompensation = Number(employees[i].annualSalary) + worker.totalBonus;
    }



    
    newEmployees.push(worker);

    //console.log( employees[i] );
  }
}
bonusCalculator();

console.log(newEmployees);




function newEmployee (person) {
  let newPerson = {};
  if (person.reviewRating <= 2) {
    
  }
}
