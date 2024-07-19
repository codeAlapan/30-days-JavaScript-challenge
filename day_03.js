//* Activity 1: If-Else Statements
// Write a program to check if a number is positive, negative, or zero, and log the result to the console
let num1 = 0;
if (num1 > 0) console.log("Its a positive number");
else if (num1 < 0) console.log("Its a negative number");
else console.log(`Its a zero`);

// Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let userAge = 18;
if (userAge >= 18)
  console.log(`Person with age ${userAge} is eligible to vote`);
else console.log(`Person with age ${userAge} is not  eligible to vote`);

//* Activity 2: Nested If-Else Statements
// Write a program to find the largest of three numbers using nested if-else statements.
// Method 1
let first_number = 20,
  second_number = 20,
  third_number = -30;
if (first_number > second_number) {
  if (first_number > third_number) {
    console.log(`${first_number} is the greatest of all three`);
  } else console.log(`${third_number} is the greatest of all three`);
} else {
  if (second_number > third_number)
    console.log(`${second_number} is the greatest of all three`);
  else console.log(`${third_number} is the greatest of all three`);
}

// Method 2
if (first_number > second_number && first_number > third_number)
  console.log(`${first_number} is the greatest of all three`);
else if (first_number < second_number && second_number > third_number)
  console.log(`${second_number} is the greatest of all three`);
else console.log(`${third_number} is the greatest of all three`);

//* Activity 3: Switch Case
// Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let weekday_number = 7;
switch (weekday_number) {
  case 1:
    console.log("Its Sunday");
    break;
  case 2:
    console.log("Its Monday");
    break;
  case 3:
    console.log("Its Tuesday");
    break;
  case 4:
    console.log("Its Wednesday");
    break;
  case 5:
    console.log("Its Thursday");
    break;
  case 6:
    console.log("Its Friday");
    break;
  case 7:
    console.log("Its Saturday");
    break;
  default:
    console.log("Enter valid number inbetween 1 and 7");
    break;
}

// Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let examMarks=90
switch (true) {
    case (examMarks>85 && examMarks<=100):
        console.log("Grade::A")
        break;
    case (examMarks>70 && examMarks<=85):
        console.log("Grade::B")
        break;
    case (examMarks>50 && examMarks<=70):
        console.log("Grade::C")
        break;
    case (examMarks>=40 && examMarks<=50):
        console.log("Grade::D")
        break;
    case (examMarks<40):
        console.log("Grade::F")
        break;
    default:
        break;
}

//* Activity 4: Conditional (Ternary) Operator
// Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let num=-2
// method-1
console.log( num%2==0 ? 'even' : 'odd')
// method-2
num%2==0 ? console.log("even") : console.log("odd")

//* Activity 5: Combining Conditions
// Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 2004;
if((year % 400 == 0 || year%100 != 0) && year%4 == 0)
    console.log("Its a leap-year");
else
console.log("not a leap-year")
