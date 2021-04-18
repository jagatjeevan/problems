/**
 *
 * You make an autocomplete search where you need to find
 * out the typed words are the starting of each word in the
 * list given by the api.
 *
 * Ex : If you search for "won" from the list
 * ["Wonderful World", "Great Wall of China", "Prachee won the prize", "People won't go there"]
 * would give only 3 results
 *
 * */

let inputArr = [
  "Wonderful World",
  "Great Wall of China",
  "Prachee won the prize",
  "People won't go there",
];

let search = (inputArr, words, noOfResult) => {
  const results = inputArr.filter((sentence) => {
    const wordsArr = sentence.split(" ");
    const match = wordsArr.find((word) => {
      console.log(
        word.slice(0, words.length).toLowerCase(),
        words.toLowerCase()
      );
      return word.slice(0, words.length).toLowerCase() === words.toLowerCase();
    });
    if (match) return sentence;
    return null;
  });

  return results.slice(0, noOfResult);
};
