
# KATA 1

```js
export function makeLowerCase(string) {
  return string.toLowerCase();
}

const result = makeLowerCase("I LOVE TACOS");
console.log(result);
```

-------------------------------------------------------

# BONUS KATA

```js
const alphabetArray = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
  ["d", 4],
  ["e", 5],
  ["f", 6],
  ["g", 7],
  ["h", 8],
  ["i", 9],
  ["j", 10],
  ["k", 11],
  ["l", 12],
  ["m", 13],
  ["n", 14],
  ["o", 15],
  ["p", 16],
  ["q", 17],
  ["r", 18],
  ["s", 19],
  ["t", 20],
  ["u", 21],
  ["v", 22],
  ["w", 23],
  ["x", 24],
  ["y", 25],
  ["z", 26],
];

export function messageDecoder(secretMessage) {
  // Function to find the letter corresponding to a number
  function numberToLetter(num) {
    // Convert num to a number (in case it's not already a number)
    const number = Number(num);

    // Loop through each pair in alphabetArray
    for (let i = 0; i < alphabetArray.length; i++) {
      // Get the current pair from alphabetArray
      const currentPair = alphabetArray[i];

      // Extract the number from the current pair
      const currentNumber = currentPair[1];

      // Check if the current number matches the provided number
      if (currentNumber === number) {
        // If a match is found, return the corresponding letter
        return currentPair[0];
      }
    }

    // If no matching number is found, return an empty string
    return "";
  }

  // Split the secret message into words
  const words = secretMessage.split(" ");

  // Decode each word
  const decodedWords = words.map((word) => {
    // Split each word into numbers
    const numbers = word.split("-");
    // Map each number to its corresponding letter
    const letters = numbers.map(numberToLetter);
    // Join letters to form the decoded word
    return letters.join("");
  });

  // Join all decoded words into a single string with spaces between them
  return decodedWords.join(" ");
}

// Example usage
const secretPassword = "9 12-15-22-5 20-1-3-15-19";
console.log(messageDecoder(secretPassword));
```
