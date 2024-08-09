/**
 * Hello! Your task is to decode a secret message that has been encoded using a simple substitution cipher.
 *
 * Each letter in the message has transformed into a letter that corresponds to its position in the alphabet.
 * For example, 'a' is 1, 'b' is 2, ..., and 'z' is 26.
 * Your function should take the encoded message as input and return the decoded message.
 * Make sure the decoded message is in lowercase.
 * 
 * If you need a hint, see far below on line 50
 * 
 */



export function messageDecoder(secretMessage) {

};
































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