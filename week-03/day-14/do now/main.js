var letterCount = "hello world".split('').reduce(function(returnigObject, letter, i, array) {

  // if returnigObject DOES have property named "letter",
  // increase count of this property

  // if returnigObject DOES NOT have property named "letter",
  // add this as a new property with value of 1

  if(returnigObject.hasOwnProperty(letter)) {
    // could also check : if(returnigObject[letter])
    // or               : if(returnigObject[letter] >= 1)

    // we do have this property,
    // thus we will increase its count
    returnigObject[letter] += 1;
  }
  else {
    // we don't have this property
    // thus, we will assing a new property with a value of 1

    // add property named letter
    // and set its value to 1
    returnigObject[letter] = 1;
  }
  return returnigObject;

}, {} );

console.log(letterCount);




//letterCount //  evaluates to:
// {
//   h: 1,
//   e: 1,
//   l: 3,
//   o: 2,
//   w: 1,
//   r: 1,
//   d: 1
// }
