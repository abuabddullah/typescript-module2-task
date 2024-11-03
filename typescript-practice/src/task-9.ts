/* 
Task 9: Optional Chaining
Objective: Use optional chaining with nested objects.

Instructions:

Write a function getEmployeeCity(employee) that safely retrieves the city of an employee from a nested object using optional chaining.
*/
{
  type EmployeeType = {
    name: string;
    city?: string;
  };
  function getEmployeeCity(employee: EmployeeType): string | undefined {
    return employee?.city;
  }

  const employee: EmployeeType = { name: "John", city: "New York" };
  const city = getEmployeeCity(employee);
  console.log(city);
}
