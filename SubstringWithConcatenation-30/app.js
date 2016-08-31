/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  var start = new RegExp(words[0], 'g');
  var useWords = words.concat();
  useWords.shift();
  var idx = s.match(start);

};

