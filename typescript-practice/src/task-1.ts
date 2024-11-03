/* 
Task 1: Basic Data Types and First Program
Objective: Write a TypeScript program that outputs a welcome message.

Instructions:

Create a TypeScript program.
Print the following message to the console:
Hello World, I will complete this course successfully and become a Next level Web Developer!
*/

{
  type PrintMsg = (msg: string) => void;
  const printMsg: PrintMsg = (msg: string) => {
    console.log(msg);
  };
  printMsg(
    "Hello World, I will complete this course successfully and become a Next level Web Developer!"
  );
}
