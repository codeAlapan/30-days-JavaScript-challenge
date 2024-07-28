//* Activity 1: Array Creation and Access
// Create an array of numbers from 1 to 5 and log the array to the console.
const array1 = [1, 2, 3, 4, 5];
console.log(array1);
// Access the first and last elements of the array and log them to the console.
const array2 = [1, 2, 3, 4, 5];
console.log(array2[0], "and", array2[array2.length - 1]);

//* Activity 2: Array Methods (Basic)
// Use the "push"  method to add a new number to the end of the array and log the updated array.
const array3 = [1, 2, 3, 4, 5];
array3.push(6, 7);
console.log(array3);
// Use the "pop"  method to remove the last element from the array and log the updated array.
const array4 = [1, 2, 3, 4, 5];
array4.pop();
console.log(array4);
// Use the "shift"  method to remove the first element from the array and log the updated array.
const array5=[1,2,3,4,5]
array5.shift()
console.log(array5)
// Use the "unshift"  method to add a new number to the beginning of the array and log the updated array.
const array6=[1,2,3,4,5]
array6.unshift(0)
console.log(array6)

//* Activity 3: Array Methods (Intermediate)
// Use the "map"  method to create a new array where each number is doubled and log the new array.
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNumers.map( (num) => { return num*2})
console.log(newNums);

// Use the "filter" method to create a new array with only even numbers and log the new array.
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums2=myNums.filter( (num)=>(num%2==0))
console.log(newNums2)
// Use the "reduce" method to calculate the sum of all numbers in the array and log the result.
const sum_of_myNums=myNums.reduce( (acc,curval)=>(acc+curval),0)
console.log("the sum off the elements of the array is::",sum_of_myNums)
//* Activity 4: Array Iteration
// Use a "for"  loop to iterate over the array and log each element to the console.
const array10=[1,2,3,4,5]
for(let i=0;i<array10.length;i++)
    console.log(array10[i]);
// Use a "forEach"  loop to iterate over the array and log each element to the console.
array10.forEach( (item)=>{
    console.log(item)
})
//* Activity 5: Multi-dimensional Arrays
// Create a two-dimensional array (matrix) and log the entire array to the console.
// Create a two-dimensional array (matrix)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Log the entire array to the console
console.log(matrix);

// Optionally, log each row separately for clarity
matrix.forEach(row => {
    console.log(row);
});

// Access and log a specific element from the two-dimensional array.
// Create a two-dimensional array (matrix)
let matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Access and log a specific element
// For example, to access the element in the second row and third column
let specificElement = matrix2[1][0]; // Remember that indices start from 0
console.log(specificElement); // Output: 4

