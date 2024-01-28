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
arrC.splice(1,4)
arrD.splice(1,4)
console.log(arrC,arrD,arr);


