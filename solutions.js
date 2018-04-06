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
 // Solution:
 // function countCorrectCharacters(correctWord, guess){
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

 // Title: Sum of all the multiples of 3 or 5
 //
 // Solution:
 //
 // function findSum(n) {
 //  var newArray = [];
 //  for(i = 1; i <= n; i++){
 //  if(i % 3 == 0 || i % 5 == 0){
 //  newArray.push(i);
 //  }
 //
 // }
 // var finalArray = newArray.reduce(function(a, b) {
 //  return a+b
 // }, 0);
 //  return finalArray;
 // }

 // Title: Friday the 13 th Part 1
 //
 // Solution:
 //
 // function killcount(counselors, jason){
 //   var victims = [];
 //   for(i = 0; i < counselors.length; i++){
 //     for(j = 0; j < counselors[i].length; j++){
 //               }
 //       if(counselors[i][1] < jason){
 //       victims.push(counselors[i][0]);
 //     }
 //   }
 //  return victims;
 // }

 // Title: isEven? - Bitwise Series
 //
 // Solution:
 //
 //   var isEven = function(n) { //if n is even return true, otherwise, return false
 //
 //     var divideNumber = n / 2;
 //     var stringedNum = divideNumber.toString();
 //     var stringArray = stringedNum.split('.');
 //
 //     for (i = 0; i < stringArray.length; i++) {
 //       if (stringArray[1] == undefined) {
 //         return true;
 //       } else {
 //         return false;
 //       }
 //
 //     }
 //   }
 //
 // Title: Find the Smalest Integer in the newArray
 //
 // Solution:
 //
 // class SmallestIntegerFinder {
 //   findSmallestInt(args) {
 //     let comparator = Infinity;
 //     for(var i = 0; i <= args.length; i ++){
 //       if( args[i] < comparator){
 //         comparator = args[i];
 //       }
 //
 //     }
 //     return comparator;
 //     console.log(comparator)
 //   }
 //
 // }

 // Title: Hit Count
 //
 // Solution: function counterEffect(hitCount) {
 //  let hitArray = hitCount.split("");
 //  let tempArray = [];
 //  let interdimensionalArray = [];
 //  for(i = 0; i < hitArray.length; i ++){;
 //    for(j = 0; j <= hitArray[i]; j ++){
 //    tempArray.push(j);
 //    }
 //    interdimensionalArray.push(tempArray)
 //    tempArray = [];
 //  }
 //  return interdimensionalArray;
 //
 // }

 //  Title: Exclamation marks series #13: Count the number of exclamation marks and question marks, return the product
 //
 //  Solution:
 //
 //  function product(s){
 //  //   //coding and coding....
 //  //   let questionMarks = 0;
 //  //   let exclamationPoints = 0;
 //  //   for(i = 0; i < s.length; i++){
 //  //   if(s[i] == "!"){
 //  //     exclamationPoints += 1;
 //  //       } else {
 //  //         questionMarks += 1;
 //  //         }
 //  //     }
 //  //       return exclamationPoints * questionMarks;
 //  // }
 //
 //  Title: Count the smiley faces!
 //
 // Solution:
 //
 //  function countSmileys(arr) {
 //
 // let validSmileys = 0;
 //
 // for(i = 0; i < arr.length; i++){
 // if(arr[i] === ':)' || arr[i] === ';)' || arr[i] === ':D' || arr[i] === ';D' || arr[i] === ':~)' || arr[i] === ':-)' || arr[i] === ';~)' || arr[i] === ';-)' || arr[i] === ':~D' || arr[i] === ':-D' || arr[i] === ';~D' || arr[i] === ';-D'){
 // validSmileys ++;
 // }
 // }
 // return validSmileys;
 //  //
 //  //
 //  // }
 //
 //  Title: Count the Digit
 //
 //  Solution:
 //
 //  function nbDig(number, d) {
 //     // your code
 //     var powers = [];
 //     var string;
 //     var count = 0;
 //     // var final = [];
 //     for(var i = 0; i <= number; i++){
 //     powers.push(i);
 //     }
 //     var power2 = powers.map(power => {
 //       return Math.pow(power, 2);
 //     })
 //
 //     string = power2.toString().split("")
 //     console.log(string);
 //     for (var i = 0; i <= string.length; i++) {
 //       if(string[i] == d){
 //
 //         count ++;
 //       }
 //
 //     }
 //     console.log(count);
 //   return count;
 //
 // }
 //
 //  Title: Count by X
 //
 //  Solution: function countBy(x, n) {
 //   var z = [];
 //   for(i = 1; i <= n; i++){
 //   z.push(x * i);
 //   }
 //   return z;
 // }
 //
 //  Title: Remove String Spaces
 //
 //  Solution:
 //
 //  function noSpace(x){
 // var spaceKiller = x.split(" ").join('');
 // return spaceKiller;
 // }

 //  Title: Convert a string to an array
 //
 //  Solution:
 //
 //  function stringToArray(string){
 //
 // var newString = string.split(" ");
 // return newString;
 // }

 //return newString;

 //  Title: Multiply
 //
 //  Solution: function multiply(a, b){
 //   return a * b
 // }

 //  Title: Basic Mathematical Operations
 //
 //  Solution: function basicOp(operation, value1, value2)
 // {
 //
 // return eval(value1 + operation + value2)
 //
 // }

 //  Title: String Repeat
 //
 //  Solution:
 //
 // function repeatStr (n, s) {
 // let repeat = s.repeat(n);
 // console.log(repeat)
 //   return repeat;
 // }

 //  Title: Who Likes it?
 //
 //  Solution:
 //
 //  function likes(names) {
 //
 //   for(var i = 0; i<= names.length; i++){
 //   if(names.length < 1){
 //     return 'no one likes this';
 //     }
 //   if(names.length < 2){
 //     return  names[i] + ' likes this';
 //     }
 //     if(names.length > 1 && names.length < 3){
 //     return  names[0] + ' and ' + names[1] + ' like this';
 //     }
 //   if(names.length > 2 && names.length < 4){
 //     return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
 //     }
 //   if(names.length > 3){
 //     return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
 //     }
 //   }
 //
 // }