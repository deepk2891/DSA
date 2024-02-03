const arr = [ 1,2,3,4,5,6,7,8,9,10 ]
// const arr2 = new Array()

console.log(arr);

const firstElement = arr[ 0 ]
const arrLength = arr.length
const lastelement = arr[ arrLength - 1 ]

console.log(lastelement);


//remove last
const lassElement1 = arr.pop()
console.log(lassElement1);
console.log(arr);

//add last
arr.push(5)
console.log(arr);

//add start
arr.unshift(5000)
console.log(arr);

//remove start
arr.shift()
console.log(arr);


for (let i = 0; i < arr.length; i++)
{
    console.log(arr[ i ]);
}

arr.forEach((x,index) => {
    console.log(index,x);
})

for (let x of arr)
{
    console.log(x);
}

const findElement = (arr,target) => {
    for (let x of arr)
    {
        if (x === target)
        {
            return true
        }
    }
    return false
}
console.log(findElement(arr,"Hello"));
console.log(findElement(arr,"hello"));

console.log(arr.includes("Hello"));


const findElementIndex = (arr,target) => {
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[ i ] === target)
        {
            return i
        }
    }
    return false
}
console.log(findElementIndex(arr,"Hello"));

console.log(arr.indexOf("Hello"));

console.log(arr);

arr.splice(1,3) // remove 3 items from the 1st index
console.log(arr);

arr.splice(1,0,2,3,4,5,6) // 0 = dont delete anything  Add 2,3,4,5,6
console.log(arr);

arr.splice(1,3,6,7,8)  // from 1 index delete 3 items add following


// splice vs slice
const sunArr = arr
console.log(sunArr);


// Shallow copy ❌

const arrB = arr
arrB.splice(1,4)
console.log(arrB,arr);


// Deep copy
const arrC = [ ...arr ]
const arrD = Array.from(arr)
const arrE = arr.concat()
arrC.splice(1,4)
arrD.splice(1,4)
arrE.splice(1,3)
console.log(arrC,arrD,arrE,arr);


// How to add two array in JavaScript

const newArr = [ ...arr,...arrE ]
const newArr2 = arr.concat(arrE)
console.log(newArr);
console.log(newArr2);


// Question 3 : How you check if two arrays are equal

const isArrayEqual = (arr1,arr2) => {
    //  if (arr1.length !== arr2.length)
    //  {
    //      return false
    //  }
    //  for (let i = 0; i < arr1.length; i++)
    //  {
    //      if (arr1[ i ] !== arr2[ i ])
    //      {
    //          return false
    //      }
    //  }
    //  return true

    return arr1.length === arr2.length && arr1.every((ele,i) => arr1[ i ] === arr2[ i ])
}

console.log(isArrayEqual([ 1,2,3,4 ],[ 1,2,3,4 ]));



// Question 4 : How to sort an array in ascending and descendingorder ?

const x = [ 10,50,30,80,90,60,40,30 ]
x.sort()
console.log(x);


// Question 5 : How to reverse an array 

// 1 ,4 => 4 ,1 
// x.sort((a,b) => b - a);
// console.log(x);

x.reverse();
console.log(x);


// MAP FILTER REDUCE

const newMapArr = x.map((ele,i) => ele * ele)
console.log(newMapArr);

const positiveNumbers = x.filter((ele,i) => ele > 0)
console.log(positiveNumbers);

const sumOfArr = x.reduce((acc,ele) => acc + ele)
console.log(sumOfArr);


const y = [ 1,2,3,[ 5,4,[ 8 ],7 ],6,9,10,11,12 ];

const FlatttenedArray = y.flat(1) // removed 1 brackets counting from outside
console.log(FlatttenedArray);

console.log(y.flat(Infinity));
console.log(y.flat(isFinite));


// Filter vs Find

// Find => returns 1st element which fullfilled the condition.

const positiveNumber = x.find((ele,i) => ele > 0)
console.log(positiveNumber);
