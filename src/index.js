
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == null) return [];
  return matrix.map((el,i)=>(i%2 != 0) ? el.reverse() : el).flat();
};
