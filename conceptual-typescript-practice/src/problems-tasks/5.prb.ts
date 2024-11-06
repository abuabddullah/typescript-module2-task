/* 
// You are given an object called “student” representing a student's information with the following properties: name (string), age (number), and grades (array of numbers). Make an interface using given properties. Write a TypeScript function called calculateAverageGrade that takes this student object as input and calculates the average grade.
*/
{
  interface IStudent {
    name: string;
    age: number;
    grades: number[];
  }

  const student: IStudent = {
    name: "John",
    age: 20,
    grades: [85, 90, 78, 92, 88],
  };

  const calculateAverageGrade = (objct: IStudent): number => {
    const arrSum = objct.grades.reduce((a, b) => a + b, 0);
    return arrSum / objct.grades.length;
  };

  console.log(calculateAverageGrade(student));
}
