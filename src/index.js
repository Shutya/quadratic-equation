module.exports = function solveEquation(equation) {
  const numbers = equation.match(/(-?|\+\s|-\s)[^\^][0-9]+/g).map(item => Number(item.replace(/\s/g, '')));

  const [a, b, c] = numbers;

  const D = Math.pow(b, 2) - 4 * a * c;

  const res1 = (-b + Math.sqrt(D)) / (2 * a);
  const res2 = (-b - Math.sqrt(D)) / (2 * a);

  const result = [Math.round(res1), Math.round(res2)];

  return result.sort((a, b) => a - b);
}
