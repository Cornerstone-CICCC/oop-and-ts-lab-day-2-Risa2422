"use strict";
// Create a function `renameKeys` that accepts an object and a mapping of key renames.
// The function should return a new object where the keys are renamed according to the map.
// Return type: a new object with renamed keys.
function renameKeys(info, newInfo) {
    const newName = newInfo.name;
    const updateInfo = { name: newName, age: info.age };
    return updateInfo;
}
// Expected output:
console.log(renameKeys({ name: "Alice", age: 30 }, { name: "fullName" }));
// { fullName: "Alice", age: 30 }
