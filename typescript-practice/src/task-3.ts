/* 
Task 3: Object Types, Type Alias, & Literal Types
Objective: Define a structured Person object using Type Aliases.

Instructions:

Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.
*/

{
  /* my answer which is poor */
  type PersonType = {
    name: string;
    address: string;
    hairColor: string;
    eyeColor: string;
    income: number;
    expenses: number;
    hobbies: string[];
    familyMembers: string[];
    job: string;
    skills: string[];
    maritalStatus: boolean;
    friends: string[];
  };

  const person: PersonType = {
    name: "John",
    address: "123 Main St",
    hairColor: "blonde",
    eyeColor: "brown",
    income: 50000,
    expenses: 20000,
    hobbies: ["music", "sports"],
    familyMembers: ["mother", "father", "sister"],
    job: "software developer",
    skills: ["HTML", "CSS", "JavaScript"],
    maritalStatus: true,
    friends: ["Alice", "Bob", "Charlie"],
  };

  /* gpt answer is rox */
  type Color =
    | "black"
    | "brown"
    | "blonde"
    | "red"
    | "gray"
    | "blue"
    | "green"
    | "hazel";

  type Hobbies = string[]; // Array of hobbies
  type Skills = string[]; // Array of skills

  type FamilyMember = {
    name: string;
    relationship: string; // e.g., 'sibling', 'parent'
  };

  type Friend = {
    name: string;
    howMet: string; // e.g., 'school', 'work'
  };

  type PersonType2 = {
    name: string;
    address: string;
    hairColor: Color;
    eyeColor: Color;
    income: number;
    expense: number;
    hobbies: Hobbies;
    familyMembers: FamilyMember[];
    job: string;
    skills: Skills;
    maritalStatus: "single" | "married" | "divorced" | "widowed";
    friends: Friend[];
  };

  // Example usage:
  const person2: PersonType2 = {
    name: "Alice Smith",
    address: "123 Main St, Anytown, USA",
    hairColor: "blonde",
    eyeColor: "blue",
    income: 60000,
    expense: 30000,
    hobbies: ["reading", "hiking", "painting"],
    familyMembers: [
      { name: "John Smith", relationship: "spouse" },
      { name: "Emma Smith", relationship: "daughter" },
    ],
    job: "Software Developer",
    skills: ["TypeScript", "React", "Node.js"],
    maritalStatus: "married",
    friends: [
      { name: "Bob Johnson", howMet: "college" },
      { name: "Sarah Davis", howMet: "work" },
    ],
  };

  console.log(person);
  console.log(person2);
}
