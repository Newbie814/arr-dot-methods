let names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

console.log(names.length); //5
console.log(names[4]); //Bob
console.log(names[names.length - 1]); //Bob  always the last element
//concat

const lastNames = ['Smith', 'Johnson', 'Williams'];
const allNames = names.concat(lastNames);
console.log(allNames); //['John', 'Jane', 'Mary', 'Mark', 'Bob', 'Smith', 'Johnson', 'Williams']

// reverse
console.log(allNames.reverse()); //['Williams', 'Johnson', 'Smith', 'Bob', 'Mark', 'Mary', 'Jane', 'John']

// unshift ------------- add element to the beginning of the array
allNames.unshift('Suzy');
console.log(allNames); //['Suzy', 'Williams', 'Johnson', 'Smith', 'Bob', 'Mark', 'Mary', 'Jane', 'John']

//push ------------- add element to the end of the array
allNames.push('Sally');
console.log(allNames); //['Suzy', 'Williams', 'Johnson', 'Smith', 'Bob', 'Mark', 'Mary', 'Jane', 'John', 'Sally']

// shift ------------- remove element from the beginning of the array
allNames.shift();
console.log(allNames); //['Williams', 'Johnson', 'Smith', 'Bob', 'Mark', 'Mary', 'Jane', 'John', 'Sally']

// pop ------------- remove element from the end of the array
allNames.pop();
console.log(allNames); //['Williams', 'Johnson', 'Smith', 'Bob', 'Mark', 'Mary', 'Jane', 'John']

// splice ------------- remove element from the array -- mutates the original array
// ============  first parameter is the index where to start removing elements, second parameter is the number of elements to remove, and the rest are the elements to add
allNames.splice(2, 1);
console.log(allNames); // ["Williams", "Johnson","Bob", "Mark","Mary","Jane","John"]
allNames.splice(2, 1, 'Smith');
console.log(allNames); //[ "Williams","Johnson","Bob","Mark","Mary","Jane","John"]
allNames.splice(4, 2);
console.log(allNames); //['Williams', 'Johnson', 'Bob', 'Mark', 'Mary', 'Jane', 'John'];

// arrays and for loop

const brotherNames = ['Matt', 'Trey', 'Josh'];
const brotherLastNames = 'Woodard';

let brotherFullNames = [];

for (let i = 0; i < brotherNames.length; i++) {
  brotherFullNames.push(brotherNames[i] + ' ' + brotherLastNames);
}
console.log(brotherFullNames); //['Matt Woodard', 'Trey Woodard', 'Josh Woodard']

let brotherFullNames2 = brotherNames.map((name) => {
  return name + ' ' + brotherLastNames;
});

console.log(brotherFullNames2); //['Matt Woodard', 'Trey Woodard', 'Josh Woodard']

// functions, return, if, arrays, for loop

const gas = [20, 30, 40, 50, 60];

const food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

const gasTotal = calculateTotal(gas);
console.log(gasTotal); //200
const foodTotal = calculateTotal(food);
console.log(foodTotal); //100

const allTotal = calculateTotal(gas.concat(food));
console.log(allTotal); //300

console.log({
  gas: gasTotal,
  food: foodTotal,
  all: allTotal,
});
