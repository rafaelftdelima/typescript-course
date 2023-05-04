"use strict";
let product = 'Book';
let price = 14.97;
const car = {
    color: 'black',
    price: 64549.97,
};
const isCheap = car.price < 75000 ? true : '???';
function sum(a, b) {
    return a + b;
}
sum(4, 7);
const nintendo = {
    name: 'Nintendo',
    price: '2249.47',
};
function turnPrice(price) {
    return Number(price);
}
console.log(turnPrice(nintendo.price));
