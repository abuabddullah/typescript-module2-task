/* 
// Design a TypeScript function  that takes an array of numbers and returns the largest number in the array.
*/
{
  const findLargestNumber = (arr: number[]): number => {
    return Math.max(...arr);
  };

  console.log(findLargestNumber([1, 2, 3, 4, 5]));
}
