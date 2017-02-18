// Exercise 1
function addNumbers(numberA, numberB) {
  var result = numberA + numberB;
  console.log(result);
  return result;
}

var twoPlusTwo = addNumbers(2, 2);
console.log(twoPlusTwo);


// Exercise 2
function yell(yellThis) {
  var convertThis = yellThis.toUpperCase();
  return convertThis;
}
var textToYell = yell("hello world!");
for (i=0; i<10; i++) {
  console.log(textToYell);
}

// Exercise 3
function longest(str1, str2) {
  console.log("Check2");
  var length1 = str1.length;
  var length2 = str2.length;

  if (str1.length > str2.length) {
    //console.log("Length 1 is Longer");
    return str1;
  }
  else if (length2 > length1) {
    //console.log("length2 is the longest");
    return str2;
  } else {
    //console.log("They are equal lengths");
    return false;
  }
}

var result = longest("Alabama","Mississippi");
console.log("Longest 1 - " + result);

result = longest("Washington", "Florida");
console.log("Longest 2 - " + result);

result = longest("Utah", "Ohio");
console.log("Longest 3 - " + result);

// Exercise 4
function isVowel(chr) {
  var allVowels = "AEIOU"
  isVowel = false;
  for (var i=0; i < 5; i++ ) {
    if (chr.toUpperCase() == allVowels[i]) {
      return true;
    }
  }
  if (isVowel == false) {
    if (chr.toUpperCase == "Y") {
      return "Sometimes";
    }
  }
  return isVowel;
}

var isIt = isVowel("U");
console.log(isIt);

//Getting error on next line
/*isIt = isVowel("z");
console.log(isIt);

isIt = isVowel("y");
console.log(isIt);
*/
