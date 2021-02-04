/*
Instructions:
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:


likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
*/

// with a switch statement
function likes(names) {
   const people = names.length;

   switch (people) {
      case 0:
      return 'no one likes this';
      break;
      case 1:
      return names[0] + ' likes this';
      break;
      case 2:
      return names[0] + ' and ' + names[1] + ' like this';
      break;
      case 3:
      return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
      break;
      default:
      return names[0] + ', ' + names[1] + ' and ' + people + ' others like this';
   }
}

// console.log(likes(['Karen']));
// console.log(likes(['Steve', 'Kyle', 'Roberta', 'Kippy', 'Gene', 'Virginia']));
// console.log(likes(['Molly', 'Amanda', 'Journey']))
// console.log(likes(['Alex', 'Jacob', 'Jeri', 'Maxine']));
// console.log(likes([]))
//return time 0.689s, 0.811s, 0.774s, 0.94s, 0.838s
let swTime = [0.689, 0.811, 0.774, 0.94, 0.838];
swTime = swTime.reduce((acc, currV) => acc += currV / 5, 0)
console.log(swTime) // 0.8104


//  with else if statement

function likesIt(names) {
   if (names.length === 0) {
      return 'no one likes this';
   } else if (names.length <= 1) {
      return  names + ' likes this'
   }  else if (names.length <= 2) {
      return names[0] + ' and ' + names[1] + ' like this';
   } else if (names.length <= 3) {
      return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
   } else {
         let others = names.length - 2;
         names = names.slice(0, 2);
         return names[0] + ', ' + names[1] + ' and ' + others + ' others like this';
   }
}

console.log(likesIt(['Karen']));
console.log(likesIt(['Steve', 'Kyle', 'Roberta', 'Kippy', 'Gene', 'Virginia']));
console.log(likesIt(['Molly', 'Amanda', 'Journey']))
console.log(likesIt(['Alex', 'Jacob', 'Jeri', 'Maxine']));
console.log(likesIt([]))


// returns at 0.702s 0.749s 0.784s 0.787s 0.717s
 let times = [0.702, 0.749, 0.784, 0.787, 0.717];
 times = times.reduce((acc, currV) => acc += currV / 5, 0);
 console.log(times) //0.7478
