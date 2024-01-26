/*
    Question 1 : sum of all natural numbers from 1 to n

    sum of 1 to 5 : 15

*/

function sumOfNaturalNumber (num) {
    let sum = 0
    for (let i = 1; i <= num; i++)
    {
        sum = sum + i
    }
    // return sum

    return num * (num + 1) / 2
}
console.log(sumOfNaturalNumber(5))
console.log(sumOfNaturalNumber(8))
console.log(sumOfNaturalNumber(15))