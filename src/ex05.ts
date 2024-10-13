// Create a function `generateSummary` that accepts an array of objects representing users with `name`, `age`, and `active` properties.
// The function should return a summary object containing the number of active users and the average age of active users.
// Return type: { activeCount: number, averageAge: number }

interface User {
  name: string;
  age: number;
  active: boolean;
}

function generateSummary(users: User[]): {
  activeCount: number;
  averageAge: number;
} {
  let activeCount: number = 0;
  let totalAge: number = 0;

  users.forEach((item) => {
    if (item.active) {
      activeCount++;
      totalAge += item.age;
    }
  });

  const averageAge = totalAge / activeCount;

  return { activeCount, averageAge };
}

// Expected output
const summary = generateSummary([
  { name: "Alice", age: 30, active: true },
  { name: "Bob", age: 25, active: false },
  { name: "Charlie", age: 35, active: true },
]);
console.log(summary); // { activeCount: 2, averageAge: 32.5 }
