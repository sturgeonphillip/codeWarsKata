/*The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.*/

//my first pass:
function duplicateEncode(word){
  let letter = word
  .toLowerCase()
  .split('');
  let count = letter.map(function(x) {
    let c = 0;
    for (let i = 0; i < letter.length; i++) {
      if (letter[i] === x) {
        c++;
      }
    }
    return c;
  }).map(x => {
    if (x > 1) {
      return ')';
    } else return '(';
  }).join('');
  return count;
}



duplicateEncode('Success')
console.log(duplicateEncode('Success'));


// tests
/*
Test.assertEquals(duplicateEncode("din"),"(((");
Test.assertEquals(duplicateEncode("recede"),"()()()");
Test.assertEquals(duplicateEncode("Success"),")())())","should ignore case");
Test.assertEquals(duplicateEncode("(( @"),"))((");
*/
