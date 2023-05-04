let product = 'Book';
let price: number = 14.97;

const car: {
  color: string,
  price: number,
} = {
  color: 'black',
  price: 64549.97,
};

const isCheap: boolean | string = car.price < 75000 ? true : '???';

function sum(a: number, b: number): number {
  return a + b;
}

sum(4, 7);

const nintendo = {
  name: 'Nintendo',
  price: '2249.47',
};

function turnPrice(price: string): number {
  return Number(price);
}

console.log(turnPrice(nintendo.price));
