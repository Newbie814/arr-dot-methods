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
