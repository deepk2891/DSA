/*
    Question 2 : Sum of Digits of a number

    1287 : 1 + 2 + 8 + 7 = 18

    1287 % 10 , reminder = 7 + 8, Q = 128 % 10 = 12
*/

function sumOfDigits (num) {
  let sum = 0
  while (num > 0)
  {
    sum += num % 10
    num = Math.floor(num / 10)
  }
  return sum
}
console.log(sumOfDigits(1287));
