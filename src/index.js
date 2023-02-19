
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || !matrix.length) {
    return [];
  }
  return matrix.reduce((acc, value, index) => {
    if (index % 2 === 0) {
      acc = acc.concat(value);
    } else {
      acc = acc.concat(value.reverse());
    }
    return acc;
  }, []);
}
