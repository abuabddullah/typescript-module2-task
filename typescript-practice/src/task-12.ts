/* 
Task 12: Never Type
Objective: Use the never type for functions that don’t return.

Instructions:

Write a function handleError that:
Accepts a message: string.
Throws an error with the given message.
Use the never return type to indicate that this function never returns.
*/

{
  type ErrorConstructor = (message?: string) => never;
  const handleError: ErrorConstructor = (message) => {
    throw new Error(message);
  };
  console.log(handleError("hello this is for handleError function"));
}
