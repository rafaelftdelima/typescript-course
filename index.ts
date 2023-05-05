function toNumber(value: number | string) {
  if (typeof value === "number") {
    return value;
  } else if (typeof value === "string") {
    return Number(value);
  } else {
    throw "value must be a number or string";
  }
}

console.log(toNumber(11));
console.log(toNumber('11'));

console.log(toNumber(true));
