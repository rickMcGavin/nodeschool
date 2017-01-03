function countWords(inputWords) {
  // SOLUTION GOES HERE
  return inputWords.reduce(function(acc, word) {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});
}

module.exports = countWords;
