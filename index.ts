const numbers = [10, 20, 30, 40, 50, 3];
const values = [10, 'Tax', 30, 'Product', 50, 3];

function greaterThan10(data: number[]) {
  return data.filter((n) => n > 10);
}

function filterValues(data: Array<string | number>) {
  return data.filter((n) => typeof n === 'number');
}

console.log(greaterThan10(numbers));
console.log(filterValues(values));
