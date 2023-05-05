// A function called "multiplication" that returns the product of the two input numbers.

function multiplication(x, y) {
    const total = x * y; 
    return total;
}



/* A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays. */

function concatOdds (arr1, arr2) {
    let concatArr = arr1.concat(arr2);
    var oddArr = [];

    for (var i = 0; i < concatArr.length; i++) {
    if (concatArr[i] % 2 !== 0) {
    oddArr.push(concatArr[i]);
    }
  }

  return oddArr;
}

testArr1 = [1, 2, 3, 4, 5, 6]
testArr2 = [7, 8, 9, 10, 11, 12]

console.log(concatOdds(testArr1, testArr2)) // expected output 1, 3, 5, 7, 9, 11

testArr3 = ["a", "b", "c"]
testArr4 = ["3", 4, "d", 5]

console.log(concatOdds(testArr3, testArr4)) // expected output 5

// shows all the strings + the single odd interger, need to omit strings 

