var badNumbers = function(array, badNumbers) {
  return array.reduce(function(newArray, index) {
    if(badNumbers.indexOf(index) === -1 && newArray.indexOf(index) === -1) newArray.push(index);
    return newArray;
  }, []);
}

module.exports = badNumbers;
