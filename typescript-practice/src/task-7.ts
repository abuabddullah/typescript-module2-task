/* 
Task 7: Type Assertion and Narrowing
Objective: Write a function that behaves differently based on the input type.

Instructions:

Create a function that accepts a parameter of type string | number.
The function should:
Return the length if the input is a string.
Return the square if the input is a number.
*/

{
  //
  type Task4AssertionType = (param: string | number) => number | undefined;

  const task4Assertion: Task4AssertionType = (param) => {
    if (typeof param === "string") {
      return param.length;
    } else if (typeof param === "number") {
      return param * param;
    }
  };

  const numTask = task4Assertion(2) as number;
  console.log(numTask);
  const strTask = task4Assertion("hello") as number;
  console.log(strTask);
  //
}
