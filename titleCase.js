function titleCase(title, minorWords) {
  if (arguments === 1) {
    title = arguments[0]
  }
  title.toLowerCase();
 // console.log(title)
  if (title === minorWords) {
    return title;
  }

// //minorWords.toLowerCase();
//   title = title.toLowerCase().split(' ');
//   let capped = title.map(word => word[0].toUpperCase() + word.slice(1));
  if (!minorWords) {
    title = title.toLowerCase().split(' ');
    let full = title.map(word => {
       word = word.split('');
       let remain = word.splice(1);
       console.log(remain)

       let cap = word.splice(0,1).toString().toUpperCase();
        return cap.concat(...remain);
     })
    return full.join(' ')
  }
  else if (minorWords) {
    title = title.toLowerCase().split(' ');
    let check = minorWords.toLowerCase().split(' ');
    let word = title.splice(1);

    let newWord = [];
    for (let i = 0; i < word.length; i++ ) {
      if (check.includes(word[i])) {
      newWord.push(word[i]);
    } else {
      let wordy = word[i].split('').splice(1).join('').toString();
      let capWord = word[i].split('').slice(0, 1).toString().toUpperCase();

      newWord.push(capWord.concat(wordy));
    }

  }
    newWord.unshift(title[0].toUpperCase());
   return newWord.join(" ");
}
}

//titleCase('a clash of KINGS', 'a an the of')
console.log(titleCase('THE WIND IN THE WILLOWS'))


//console.log(titleCase('a clash of KINGS', 'a an the of'))
// titleCase('THE WIND IN THE WILLOWS', 'The In')
// titleCase('the quick brown fox')
// titleCase('', '')

/*
Test.assertEquals(titleCase(''), '')
Test.assertEquals(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
Test.assertEquals(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
Test.assertEquals(titleCase('the quick brown fox'), 'The Quick Brown Fox')
*/
 //console.clear()
