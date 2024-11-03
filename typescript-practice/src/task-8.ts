/* 
Task 8: Intersection Types
Objective: Practice using intersection types.

Instructions:

Create a type AdminUser that is an intersection of:
User with properties name and email
Admin with property adminLevel
Write a function describeAdmin(user: AdminUser): string that returns a description of the admin user.
*/
{
  type User = {
    name: string;
    email: string;
  };
  type Admin = {
    adminLevel: string;
  };

  type AdminUser = User & Admin;

  type DescribeAdminFnType = (user: AdminUser) => string;

  const describeAdmin: DescribeAdminFnType = (user) => {
    return `Hello ${user.name}, you are a ${user.adminLevel} admin.`;
  };
  const adminUserVar: AdminUser = {
    name: "Alice",
    email: "alice@example.com",
    adminLevel: "super",
  };

  console.log(describeAdmin(adminUserVar));
}
