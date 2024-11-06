/* 
// Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.
*/

{
  const filterEvenNumbers = (arr: number[]): number[] => {
    return arr.filter((n: number, i: number): boolean => n % 2 === 0);
  };

  console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}
