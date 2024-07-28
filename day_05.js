//* Activity 1: Function Declaration
// Write a function to check if a number is even or odd and log the result to the console.
let num1=4
    function checkEvenOdd(num1)
    {
        if(num1%2==0)
            console.log(num1,"is a even no")
        else
        console.log(num1,"is an odd no")
    }
    checkEvenOdd(num1)
// Write a function to calculate the square of a number and return the result.
let num2=10
function square(num2)
{
    return num2*num2; //method1
    return num2**2; //method2
}
console.log("The square of",num2,"is :",square(num2));

//* Activity 2: Function Expression
// Write a function expression to find the maximum of two numbers and log the result to the console.
function findMaximumNumber(num3,num4)
{
    if(num3>num4)
        console.log(num3,"is maximum among",num3,"and",num4);
    else
    console.log(num4,"is maximum among",num3,"and",num4);
}
num3=20,num4=45
findMaximumNumber(num3,num4)
// Write a function expression to concatenate two strings and return the result.
function concatenateStrings(string1,string2)
{
    return string1+string2; //method 1
    return (String(string1)).concat(String(string2)); //method2
    return `${string1}${string2}`; //method3
}
let string1="Alapan",string2=" Pal"
let concatenatedString=concatenateStrings(string1,string2)
console.log(concatenatedString);

//* Activity 3: Arrow Functions
// Write an arrow function to calculate the sum of two numbers and return the result.
const sum_of_two= (num5,num6)=>(num5+num6)
console.log(sum_of_two(3,4))
// Write an arrow function to check if a string contains a specific character and return a boolean value.
temp3="alapan"
const is_value_present=(temp3,ch)=>(temp3.includes(ch))
console.log(is_value_present(temp3,'al'));
//* Activity 4: Function Parameters and Default Values
// Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function calculateProduct(temp1,temp2=1)
{
    return Number(temp1)*Number(temp2);
}
console.log("The product is::",calculateProduct(2,"rip")) //Nan
console.log("The product is::",calculateProduct(2,3)) //6

// Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greetingMessage(userName="Coder Sahab",userAge=20)
{
    console.log("Hanji!!To kaise hai aap",userName,"dekhiye kaise",userAge,"saaloka ho gye aur pata bhi nhi chala,btw Congrats")
}
greetingMessage("Alapan")

//* Activity 5: Higher-Order Functions
// Write a higher-order function that takes a function and a number, and calls the function that many times.
// Higher-order function
function repeater(callback, numTimes) {
    for (let i = 0; i < numTimes; i++) {
        callback();
    }
}

// Function to be repeated
function printMessage() {
    console.log("Printed");
}

// Calling the higher-order function
repeater(printMessage, 5);

// Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function parentHigherOrder(first_function,second_function,value){
    first_function(value);
    second_function(value);
}

function first_function(value)
{
    console.log("got the value first",value);
}
function second_function(value)
{
    console.log("got the value second",value)
}
parentHigherOrder(first_function,second_function,5)