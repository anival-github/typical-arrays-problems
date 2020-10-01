
exports.min = function min(array) {
  if (arguments.length === 0) {
    return 0
  }
  if (array.length === 0) {
    return 0
  }
  let i = array.length;
  let minNumber = Infinity;
  while (i >= 0) {
    if (array[i] < minNumber) {
      minNumber = array[i]
    }
    i -= 1;
  }
  return minNumber
}

exports.max = function max(array) {
  if (arguments.length === 0) {
    return 0
  }
  if (array.length === 0) {
    return 0
  }
  return Math.max.apply(null, array)
}

exports.avg = function avg(array) {
  if (arguments.length === 0) {
    return 0
  }
  if (array.length === 0) {
    return 0
  }
  let sum = array.reduce((a, x) => a += x);
  return sum / array.length;
}
