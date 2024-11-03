/* 
Task 6: Spread and Rest Operators, Destructuring
Objective: Write a function that uses the rest operator for variable-length arguments.

Instructions:

Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.
*/

{
  //
  type SumAllArgType = (...arg: number[]) => number;
  const sumAllArg: SumAllArgType = (...arg) => {
    return arg.reduce((total, num) => total + Number(num), 0);
  };
  console.log(sumAllArg(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

  /* alternative answer */
  const sumAllArg2 = (...arg: number[]): number => {
    return arg.reduce((total, num) => total + num, 0);
  };

  console.log(sumAllArg2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
  //
}
