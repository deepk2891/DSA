// 1 :  Remove Duplicates from an Array 
// I / P    arr = [ 3,4,5,2,3,4,5,6 ]
// O / p[ 3,4,5,2,6 ]

function removeDuplicate (arr) {
    return arr.filter((value,index,self) => {
        return self.indexOf(value) === index
    })
}
const inputArray = [ 3,4,5,2,3,4,5,6 ];
console.log(removeDuplicate(inputArray));


// 2 :  Traverse a 2D Array - Print column - wise reverse

// I / P   // O / P
// 1 2 3   // 7 4 1
// 4 5 6   // 8 5 2
// 7 8 9   // 9 6 3

// let arr = [
//     [ 1,2,3 ],
//     [ 4,5,6 ],
//     [ 7,8,9 ]
// ]
// let len = arr.length
// let new_array = []

// console.log(arr);

// for (let i = len - 1,j = 0; i >= 0; i--,j++)
// {
//     new_array[ j ] = arr[ i ]
// }

// console.log(new_array);



// 3 :  Transpose the Matrix

// Input     // Output
// 0 0 0 0   // 0 1 2 3 4
// 1 1 1 1   // 0 1 2 3 4
// 2 2 2 2   // 0 1 2 3 4
// 3 3 3 3   // 0 1 2 3 4
// 4 4 4 4


// let arr = [
//     [ 0,0,0,0,0 ],
//     [ 1,1,1,1,1 ],
//     [ 2,2,2,2,2 ],
//     [ 3,3,3,3,3 ],
//     [ 4,4,4,4,4 ]
// ];

// let len = arr.length;
// let new_array = [];

// for (let i = 0; i < arr[ 0 ].length; i++)
// {
//     new_array[ i ] = [];
// }

// console.log(arr);
// for (let i = 0; i < len; i++)
// {
//     for (let j = 0; j < arr[ i ].length; j++)
//     {
//         new_array[ j ][ i ] = arr[ i ][ j ];
//     }
// }
// console.log(new_array);




// 4 :  Rotate By 90

// Input      // Output
// 1 2 3 4    // 4 8 4 8
// 5 6 7 8    // 3 7 3 7
// 1 2 3 4    // 2 6 2 6
// 5 6 7 8    // 1 5 1 5

// let arr = [
//     [ 1,2,3,4 ],
//     [ 5,6,7,8 ],
//     [ 1,2,3,4 ],
//     [ 5,6,7,8 ]
// ];

// let len = arr.length;
// let inProcess = [];
// let new_array = [];

// for (let i = 0; i < arr[ 0 ].length; i++)
// {
//     inProcess[ i ] = [];
// }

// console.log(arr);
// for (let i = 0; i < len; i++)
// {
//     for (let j = 0; j < arr[ i ].length; j++)
//     {
//         inProcess[ j ][ i ] = arr[ i ][ j ];
//     }
// }

// for (let i = len - 1,j = 0; i >= 0; i--,j++)
// {
//     new_array[ j ] = inProcess[ i ]
// }
// console.log(new_array);





// 5 :  Task 10: Print Z

// * * * * *
//       *
//     *
//   *
// * * * * *

for (let i = 0; i < 5; i++)
{
    let row = '';

    for (let j = 0; j < 5; j++)
    {
        if (i === 0 || i === 4 || i === 4 - j)
        {
            row += ' *';
        } else
        {
            row += '  ';
        }
    }

    console.log(row);
}
