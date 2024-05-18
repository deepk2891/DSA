/*
    Question 3 : count the number of digits of a number

    34252 = 5
*/

function countNumberOfDigits (num) {
  num = Math.abs(num)
  let count = 0
  do
  {
    count++
    num = Math.floor(num / 10)
  } while (num > 0)
  return count
}
console.log(countNumberOfDigits(34252));
