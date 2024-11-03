/* 
Task 2: Functions, Optional, and Literal Types
Objective: Create a function with parameters and an optional literal type.

Instructions:

Define a function that takes:
name (string)
age (number)
role (optional, with type 'admin' | 'user' | 'guest')
The function should log these values or perform a basic action.
*/
{
  type Task2fnType = (
    name: string,
    age: number,
    role?: "admin" | "user" | "guest"
  ) => void;

  const task2fn: Task2fnType = (name, age, role) => {
    console.log(name, age, role);
  };

  task2fn("John", 30, "admin");
}
