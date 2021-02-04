/*
Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :
   "(p1**n1)(p2**n2)...(pk**nk)"

where a ** b means a to the power of b
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

*/

function isPrime(number) {
   for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
      if (number % i === 0) return number + ' is the number. i is ' + i;
      return number > 1;
   }
}
//console.log(isPrime(19))
console.log(isPrime(21))
// console.log(isPrime(20))
// console.log(isPrime(5))
// console.log(isPrime(6))
// console.log(isPrime(7))
// console.log(isPrime(8))
// console.log(isPrime(9))
// console.log(isPrime(10))
// console.log(isPrime(11))
// console.log(isPrime(12))
// console.log(isPrime(13))
// console.log(isPrime(14))
// console.log(isPrime(15))
// console.log(isPrime(16))
// console.log(isPrime(17))




function primeFactors(n) {
   let prime = n;
   let int = 2;
   let refactor = 0;




   while (prime > 2) {
      if (Number.isInteger(prime/int)) {
         if (isPrime(prime))
         refactor = prime / int;
      }
   }
}
   // for (let i = 0; i < prime; i++) {
   //    let needed = 0;
   //    for (let j = 0; j > prime[i]; j--) {
   //       prime.push(j)
   //    }
   // }

   primeFactors(77)
   var counter = 10;
   while (counter > 0) {
      console.log(counter--)
   }

//    var factor = function(number) {
//   var result = 1;
//   var count;
//   for (count = number; count > 1; count--) {
//     result *= count;
//   }
//   return result;
// };
// console.log(factor(6));
// // 720
//

   //primeFactors(7775460)


   // let factors = [];
   // for (let i = 2; i < n/2; i++) {
   //    let prime = n;
   //    if (prime / i) {
   //
   //       factors.push(i);
   //    }
   // }



   //console.log(primeFactors(7775460))

   //
   // function primeFactors(n){
   //
   //     //your code here
   // }
   //
   // primeFactors(7775460)
   // //console.log(primeFactors(7775460))


   /*
   Test.assertEquals(primeFactors(7775460),"(2**2)(3**3)(5)(7)(11**2)(17)")
   */
