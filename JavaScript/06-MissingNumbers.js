function missingNumber (nums) {
  // let sum = 0
  // for (let i = 0; i < nums.length; i++)
  // {
  //     sum += nums[ i ]
  // }

  return (nums.length * (nums.length + 1) / 2) - nums.reduce((a,b) => { return a + b })
}

console.log(missingNumber([ 1,3,0 ]))  // 2

