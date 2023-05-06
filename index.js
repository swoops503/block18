// A function called "multiplication" that returns the product of the two input numbers.

//issues to test for: 
// that the product of the two arguements is correct
// tests for datatype
// tests for negative number multiplication
// tests for netagive number multiplied by a positive number
// tests for decimal points being multiplied

function multiplication(x, y) {
    const total = x * y;
    const stringError = "contains a string"  // if variable contains a string return the value 'contains a string' 
    if (typeof x === '') {
      return stringError
    }
    if (typeof y === '') {
      return stringError
    }
    return total;
}

let num1 = 17;
let num2 = 47;

console.log(multiplication(num1, num2)) // should result in 799

let num3 = "14";
let num4 = 15 ;

console.log(multiplication(num3, num4)) // should result in "contains a string"
// not entirely sure why it is changing the datatype of variables x & y in the multiplication function

let num5 = 12;
let num6 = -4;

console.log(multiplication(num5, num6)) // should result in -48

let num7 = 0.5;
let num8 = 4.7; 

console.log(multiplication(num7, num8)) // should result in 2.35

let num9 = -5;
let num10 = -5;

console.log(multiplication(num9, num10)) // should result in 25


/* A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays. */

// needs to concatonate 2 array arguements into a single array
// needs to check for odds in the array
// needs to omit multiple numbers in the concatonated array
// needs to check for strings in the array
// needs to omit strings in the array


function concatOdds (arr1, arr2) {
    let concatArr = arr1.concat(arr2);
    var oddArr = [];

    for (var i = 0; i < concatArr.length; i++) {
    if (typeof concatArr[i] !== 'string' && concatArr[i] % 2 !== 0) {  // added typeof check to omit strings from the array
      oddArr.push(concatArr[i]); 
    }
  }

  return oddArr;
}

testArr1 = [1, 2, 3, 4, 5, 6]
testArr2 = [1, 7, 8, 9, 10, 11, 12]

console.log(concatOdds(testArr1, testArr2)) // expected output 1, 3, 5, 7, 9, 11

testArr3 = ["a", "b", "c"]
testArr4 = ["3", 4, "d", 5]

console.log(concatOdds(testArr3, testArr4)) // expected output 5

// shows all the strings + the single odd interger, need to omit strings 

/* Functional Tests:

            A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.
                Think about the following; you may need to make assumptions or decisions about the prompt and how the feature should behave:
                    What should happen if the cart is empty?
                    What needs to be shown to the user at each step of check out?
                    What behaviors of this feature does the prompt miss or gloss over?
                Hint: Observe the shopping cart and checkout features of some popular websites to get some ideas!
 */ 

// test for what happens when the shopping cart is empty, possibly impliment a page letting the customer know their cart is empty and redirecting

/* things that need to be shown to the customer during each step of the checkout process: 
 -items in cart   -total price   -taxes & fees   -shipping costs   -discounts if applicable */
 
// we also should test to make sure that when items are removed from the cart they will also be removed at the checkout screen 
// test to verify that quantities ordered match 
// pricing error checks could be an issue
// payment processing errors also need to be tested for