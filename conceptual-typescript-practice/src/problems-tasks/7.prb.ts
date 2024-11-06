/* 
// Create a TypeScript function logString that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.
*/
{
  const logString = (str: unknown): string | void => {
    if (typeof str === "string") {
      console.log("🚀 ~ logString ~ str:", str);
    } else {
      console.error("🚀 ~ logString ~ str:Not string");
    }
  };
  logString("123");
}
