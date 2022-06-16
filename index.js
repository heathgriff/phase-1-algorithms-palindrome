function isPalindrome(word) {
  // Write your algorithm here
  let reverseWord = word.split(" ").reverse().join(" ")

  if(word === reverseWord){
    return true;
  } else {
    return false
  };
}

//isPalindrome()

/* 
  Add your pseudocode here
  (- set word = to const theWord (or not? it's already a parameter))
  - pass word through function to reverse it, fcn reverseTheWord
  - set return of reverseTheWord to const reverseWord
  - set up if statement to compare word with reverseWord
  - call isPalindrome with test cases
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("expect true");
  console.log("=>", isPalindrome("mom"));

  console.log("expect true");
  console.log("=>", isPalindrome("tacocat"));

  console.log("expect false");
  console.log("=>", isPalindrome("battle"));

  console.log("expect false");
  console.log("=>", isPalindrome("heath"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
