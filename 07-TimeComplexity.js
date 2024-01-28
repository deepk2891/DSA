// Time Complexity :
//  🛠️ How much amount of time it will take to execute certain Algorithm.


function sumOfArray (nums) {
    let sum = 0
    for (let i = 0; i < nums.length; i++)
    {
        sum += nums[ i ]
    }
    return sum
}
console.log(sumOfArray([ 1,2,3 ]));
// 6


function sumOfDigits (num) {
    let sum = 0
    while (num > 0)
    {
        sum += num % 10
        num = Math.floor(num / 10)
    }
    return sum
}
console.log(sumOfDigits(5324));
// 14


function sumOfMatrix (nums) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) //row
    {
        for (let j = 0; j < nums[ i ].length; j++)
        {
            sum += nums[ i ][ j ]
        }
    }
    return sum
}
console.log(sumOfMatrix([ [ 1,2,3 ],[ 4,5,6 ] ]));
// 21


function fn (num) {
    let arr = []
    for (let i = 1; i < num; i = i * 2)
    {
        arr.push(i)
    }
    return arr
}
console.log(fn(16));
// 1 2 4 8

