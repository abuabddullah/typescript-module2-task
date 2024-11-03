/* 

*/

{
  function isString(value: unknown): value is string {
    return typeof value === "string";
  }

  console.log(isString("hello"));

  function printUpperCase(value: unknown): void {
    if (isString(value)) {
      console.log(value.toUpperCase());
    } else {
      console.log(`${value} is not a string`);
    }
  }
  printUpperCase(135);
}
