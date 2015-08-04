(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return (root['badNumbers'] = factory());
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root['badNumbers'] = factory();
  }
}(this, function () {

	function badNumbers(array, badArray) {
	  return array.reduce(function(newArray, index) {
	    if(badArray.indexOf(index) === -1 && newArray.indexOf(index) === -1) newArray.push(index);
	    return newArray;
	  }, []);
	}

	return badNumbers;
}));
