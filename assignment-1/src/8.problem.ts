function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
  for (const k of keys) {
    if (!(k in obj)) {
      return false;
    }
  }
  return true;
}

// Sample Input
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"])); // Output: true;
