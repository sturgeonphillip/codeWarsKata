function minimumNumber(num) {
   function prime(m) {
      //console.log(m)
      if (m === 2 || m === 3
         || m === 5 || m === 7) {
         return true;
      } else if (m % 2 !== 0
              && m % 3 !== 0
              && m % 5 !== 0
              && m % 7 !== 0) {
         return true;
      } else {
         return false;
      }
   }
   let r = num.reduce((acc, currV) => acc+= currV);
   for (let i = 0; i < 8; i++) {
      //console.log(i)
      let s = i + r;
      if (prime(s)){
         //console.log()
         return i;
      }
   }
}
console.log(minimumNumber([50, 39, 49, 6, 17, 28]))
console.log(minimumNumber([2, 12, 8, 4, 6]))
minimumNumber([3, 1, 2]) // 1
//minimumNumber([5, 2]) // 0
//minimumNumber([2, 12, 8, 4, 6]) // 5
//minimumNumber([50, 39, 49, 6, 17, 28]) // 2

/*
Instructions:
Task :
Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of list should equal the closest prime number .


Notes
List size is at least 2 .
List's numbers will only positives (n > 0) .
Repetition of numbers in the list could occur .
The newer list's sum should equal the closest prime number .

Input >> Output Examples
1- minimumNumber ({3,1,2}) ==> return (1)
Explanation:
Since , the sum of the list's elements equal to (6) , the minimum number to be inserted to transform the sum to prime number is (1) , which will make the sum of the List equal the closest prime number (7) .
2-  minimumNumber ({2,12,8,4,6}) ==> return (5)
Explanation:
Since , the sum of the list's elements equal to (32) , the minimum number to be inserted to transform the sum to prime number is (5) , which will make the sum of the List equal the closest prime number (37) .
3- minimumNumber ({50,39,49,6,17,28}) ==> return (2)
Explanation:
Since , the sum of the list's elements equal to (189) , the minimum number to be inserted to transform the sum to prime number is (2) , which will make the sum of the List equal the closest prime number (191) .
*/
