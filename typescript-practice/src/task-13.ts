/* 
Task 13: Generics with Functions and Interfaces
Objective: Use generics to handle different types.

Instructions:

Create a generic function that:
Accepts an array of any type.
Returns a new array with duplicate values removed.
*/

{
  //
  const getGenericForUniqValArray = <T>(arr: T[]): T[] => {
    return [...new Set(arr)];
  };
  console.log(
    getGenericForUniqValArray([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ])
  );
  //
}
