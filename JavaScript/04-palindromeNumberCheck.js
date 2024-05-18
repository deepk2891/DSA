/*
    Question - 4 : Palindrome Numbers

    1234321
    wow,noon,deed,rotator,deified,racecar,level,mom,malayalam

*/

function palindromeNumberCheck (x) {
  /*
      num = 1234
      reverseNumber = 4
  */

  let copyNum = x,reverseNum = 0

  while (copyNum > 0)
  {
    const lastDigit = copyNum % 10
    reverseNum = reverseNum * 10 + lastDigit
    copyNum = Math.floor(copyNum / 10)
  }
  return x === reverseNum

}

console.log(palindrome(12321));
