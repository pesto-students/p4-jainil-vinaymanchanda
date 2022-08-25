function countVowel(str) {
  // initialize count
  const vowelMap = new Map();

  let countA = 0,
    countE = 0,
    countI = 0,
    countO = 0,
    countU = 0;
  // loop through string to test if each character is a vowel
  for (var letter = 0; letter < str.toLowerCase().length; letter++) {
    var supp = str[letter];
    switch (supp) {
      case "a":
        countA++;
        break;

      case "e":
        countE++;
        break;
      case "i":
        countI++;
        break;

      case "o":
        countO++;
        break;

      case "u":
        countU++;
        break;
    }
  }

  vowelMap.set("a", countA);
  vowelMap.set("e", countE);
  vowelMap.set("i", countI);
  vowelMap.set("o", countO);
  vowelMap.set("u", countU);

  console.log(vowelMap);

  // return number of vowels
}

countVowel("The quick brown fox jumps over the lazy dog");
