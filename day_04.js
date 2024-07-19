//* Activity 1: For Loop
// Task1:: Write a program to print numbers from 1 to 10 using a for loop.
console.log("Task1");
for(let i=1;i<=10;i++)
{
    console.log(i);
}
// Task2::Write a program to print the multiplication table of 5 using a for loop.
console.log("Task2");
for(let i=1;i<=10;i++)
    {
        console.log(`5 x ${i} = ${5*i}`);
    }
//* Activity 2: While Loop
// Task3::Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
console.log("Task3");
let sum=0,i=1;
while(i<=10)
{
    sum += i;
    i++;
}
console.log(`Sum is::-> ${sum}`);
// Task4::Write a program to print numbers from 10 to 1 using a while loop.
console.log("Task4");

let reverse_iterator=10;
while(reverse_iterator>0)
{
    console.log(reverse_iterator);
    reverse_iterator--;
}
//* Activity 3: Do...While Loop
// Task5::Write a program to print numbers from 1 to 5 using a do...while loop.
console.log("Task5");
let task5_iterator=1;
do {
    console.log(task5_iterator);
    task5_iterator++;
} while (task5_iterator<6);
//Task6:: Write a program to calculate the factorial of a number using a do...while loop.
console.log("Task6");
let result=1,task6_iterator=6;
do {
    result *= task6_iterator;
    task6_iterator--;
} while (task6_iterator>1);
console.log(`Factorial is:: ${result}`);

//* Activity 4: Nested Loops
// Task7::Write a program to print a pattern using nested for loops:
console.log("Task7");
// for(let i=1;i<=5;i++)
// {
//     for(let j=1;j<=i;j++)
//     {
//         console.log('*');
//     }
//     console.log();
// }

//*Method1
// let n = 5;

// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

/*
//*Looking at the Node docs apparently console.log is just process.stdout.write with a line-break at the end:

console.log = function (d) {
  process.stdout.write(d + '\n');

};
*/
//*Method2
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

//* Activity 5: Loop Control Statements
// Task8::Write a program to print numbers from 1 to 10, but skip the number 5 using the 'continue' statement
console.log("Task8");
for(let i=1;i<=10;i++)
    {
        if(i==5)
            continue;
        console.log(i);
    }
//Task9::  Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the 'break' statement
console.log("Task9");
for(let i=1;i<=10;i++)
    {
        if(i==7)
            break;
        console.log(i);
    }