function findLongestWord(string = "") {
  // Write code under this line
  let word = string.split(" ");

  let longestWord = "";

  for (const words of word) {
    if (words.length > longestWord.length) {
      longestWord = words;
    }
  }
  return longestWord;
}

console.log(findLongestWord("quick brown fox jumped over the lazy dog"));

//console.log(findLongestWord('Google do a roll'));
// 'Google'

//console.log(findLongestWord('May the force be with you'));
// 'force'
