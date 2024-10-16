// Create a generic function `addValues` that accepts either an array of numbers or an array of strings.
// - If it's an array of numbers, return the sum. If it's an array of strings, return them concatenated.
// - Implement function overloading with appropriate return types: `number` for numbers, `string` for strings.

function addValues(values: number[]): number;
function addValues(values: string[]): string;
function addValues<T extends number | string>(values: T[]): number | string {
  if (typeof values[0] === "string") {
    return values.join("");
  } else {
    const result = (values as number[]).reduce((acm, cur) => acm + cur, 0);
    return result;
  }
}

// Expected output
console.log(addValues([1, 2, 3])); // 6
console.log(addValues(["Hello", " ", "World"])); // "Hello World"
