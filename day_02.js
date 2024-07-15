//Operators

//* Assignment1
console.log("Arithmetic Operators")
let num1 = 12
let num2 = 2
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);

//*Assignment2
console.log("Assignment Operators")
let num3 = 33
let num4 = 33
console.log(num3+=20) //num1+=20 ==>  num1=num1+20
console.log(num4-=10) //num1-=10 ==>  num1=num1-10

//*Assignment3
console.log("Comparison Operators")
let num5 = 33
let num6 = 33
let num7 = '33'
console.log(num1>num2)
console.log(num1<num2)

console.log(num5<=num6)
console.log(num1<=num2)

console.log(num1>=num2)
console.log(num5>=num6)

console.log(num1==num2)
console.log(num5==num6)

console.log(num1===num2)
console.log(num5===num6)
console.log(num5===num7) //as data type is different ,therefore it's false
console.log(num5===Number(num7))   //after typecasting it gets true

//*Assignment4
console.log("Logical Operators")
console.log(true && true)
console.log(false && false)
console.log(true && false)

console.log(true || true)
console.log(false || false)
console.log(true || false)

console.log(!true)
console.log(!false)

//*Assignment5
console.log("Ternary Operators")
let num8=-2
console.log( num8>0 ? 'positive' : 'negative')