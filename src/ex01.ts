// Create a function `transformInput` that accepts either a string or a number.
// - If it's a string, reverse the string.
// - If it's a number, return the factorial of the number.
// - If an unsupported type is passed, throw an error.
// - The function should have overloads for both the string and number types.
// - Return type: string for string inputs, number for number inputs.

function transformInput(x: string | number): string | number {
  if (typeof x === "string") {
    const result = x.split("").reverse().join("");
    return result;
  } else if (typeof x === "number") {
    let result = 1;
    for (let i = 1; i <= x; i++) {
      result = result * i;
    }
    return result;
  } else {
    throw Error("this is invalid.");
  }
}

// Expected output:
transformInput("TypeScript") // "tpircSepyT"
transformInput(5) // 120