// Title: Remove First and Last Character
//
// Solution:
// function removeChar(str){
//  return str.slice(1, -1);
//
// };

// Title: Exes and Ohs
//
// Solution:
// function XO(str) {
// var exes = 0;
// var ohs = 0;
//     for(i = 0; i < str.length; i++){
//     if (str[i] === 'x' || str[i] === 'X') {
//     exes += 1;
//           } else if(str[i] === 'o' || str[i] === 'O'){
//          ohs += 1;
//       }
//
// }
//     if(exes === ohs){
//         return true
//     } else {
//         return false
//     }
// }

// Title: Guess the Word: Count Matching Letters
//
// Solution: function countCorrectCharacters(correctWord, guess){
// var counter = 0;
//   if(guess.length > correctWord.length || guess.length < correctWord.length){
//       throw 'error';
//       } else {
//           for(i = 0; i < correctWord.length; i++){
//               for(j = 0; j < guess.length; j++){
//                   }
//         if(correctWord[i] === guess[i]){
//             counter += 1
//
//               }
//         }
//     return counter;
//   }
//
// }