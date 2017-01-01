function getShortMessages(messages) {
  // SOLUTION GOES HERE
  return messages.filter(function(msg) {
    return msg.message.length < 50;
  }).map(function(msg) {
    return msg.message;
  });
}

module.exports = getShortMessages;

/*
note: I learned you could chain methods in this fashion from
https://egghead.io/lessons/javascript-chaining-the-array-map-and-filter-methods
*/
