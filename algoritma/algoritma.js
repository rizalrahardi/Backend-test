function reverseAlphabet(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  let numbers = '';

  for (let i = 0; i < str.length; i++) {
    if (alphabet.includes(str[i].toLowerCase())) {
      result += str[i];
    } else {
      numbers += str[i];
    }
  }

  result = result.split('').reverse().join('');
  return result + numbers;
}

function longestWord(sentence) {
  const words = sentence.split(' ');
  let longest = '';

  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

function countWordsInQuery(input, query) {
  const count = {};

  for (const word of input) {
    if (!count[word]) {
      count[word] = 0;
    }
    count[word]++;
  }

  const result = [];
  for (const q of query) {
    result.push(count[q] || 0);
  }

  return result;
}

function diagonalDifference(matrix) {
  let diagonal1 = 0;
  let diagonal2 = 0;

  for (let i = 0; i < matrix.length; i++) {
    diagonal1 += matrix[i][i];
    diagonal2 += matrix[i][matrix.length - 1 - i];
  }

  return Math.abs(diagonal1 - diagonal2);
}

const inputStr = 'NEGIE1';
const reversedStr = reverseAlphabet(inputStr);
console.log('Reversed Alphabet:', reversedStr);

const inputSentence = "Saya sangat senang mengerjakan soal algoritma";
const longestWordResult = longestWord(inputSentence);
console.log(`Longest Word: ${longestWordResult} (${longestWordResult.length} characters)`);

const inputArray = ['xc', 'dz', 'bbb', 'dz'];
const queryArray = ['bbb', 'ac', 'dz'];
const resultCount = countWordsInQuery(inputArray, queryArray);
console.log('Word Counts in Query:', resultCount);

const inputMatrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];
const difference = diagonalDifference(inputMatrix);
console.log('Diagonal Difference:', difference);
