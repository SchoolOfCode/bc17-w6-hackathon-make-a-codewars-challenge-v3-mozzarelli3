/**
 * Hello! Your task is to decode a secret message that has been encoded using a simple substitution cipher.
 *
 * Each letter in the message has transformed into a letter that corresponds to its position in the alphabet.
 * For example, 'a' is 1, 'b' is 2, ..., and 'z' is 26.
 * Your function should take the encoded message as input and return the decoded message.
 * Make sure the decoded message is in lowercase.
 * 
 * If you need a hint, see far below on line 70
 * 
 */


  
  const alphabetArray = [
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4],
    ['e', 5],
    ['f', 6],
    ['g', 7],
    ['h', 8],
    ['i', 9],
    ['j', 10],
    ['k', 11],
    ['l', 12],
    ['m', 13],
    ['n', 14],
    ['o', 15],
    ['p', 16],
    ['q', 17],
    ['r', 18],
    ['s', 19],
    ['t', 20],
    ['u', 21],
    ['v', 22],
    ['w', 23],
    ['x', 24],
    ['y', 25],
    ['z', 26]
  ];




export function messageDecoder(secretMessage) {

  // Function to find the letter corresponding to a number
  function numberToLetter(num) {
    const letterPair = alphabetArray.find(([_, number]) => number === Number(num));

  // Use if-else to return the letter or an empty string
    if (letterPair) {
      return letterPair[0]; // If letterPair is found, return the letter
    } else {
      return ''; // If letterPair is not found, return an empty string
    }
  }

  // Split the secret message into words
  const words = secretMessage.split(' ');

  // Decode each word
  const decodedWords = words.map(word => {
    // Split each word into numbers
    const numbers = word.split('-');
    // Map each number to its corresponding letter
    const letters = numbers.map(numberToLetter);
    // Join letters to form the decoded word
    return letters.join('');
  });

  // Join all decoded words into a single string with spaces between them
  return decodedWords.join(' ');
}

// Example usage
const secretPassword = "9 12-15-22-5 20-1-3-15-19";
console.log(messageDecoder(secretPassword));















// export function messageDecoder(encoded) {
//   // Good luck!
// }








// ONLY READ BELOW TO SEE HINTS









// Hint: The function needs to know which letter matches with which letter.
// Split the encoded string into words
    // Hint: Use split(' ') to break the string into words. Each word will be a series of numbers separated by hyphens.
// Decode each word
    // Hint: Split each word using split('-') to separate numbers.
    // Hint: Each number needs to be converted to its corresponding letter.
// Convert numbers to letters
    // Hint: Create a mapping from numbers to letters, such as an array of pairs where each pair consists of a letter and its position in the alphabet.
// Build the decoded message
    // Hint: After decoding the numbers into letters for each word, use join('') to form the complete word.
    // Hint: Use join(' ') to combine all decoded words into a final string.