/* 
// Design a TypeScript class Car that represents a basic car with properties for brand, model, and year. Implement a method displayInfo that displays information about the car.
*/
{
  class Car {
    brand: string;
    model: string;
    year: number;
    constructor(brand: string, model: string, year: number) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }

    displayInfo() {
      console.log(
        `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`
      );
    }
  }

  const myCar = new Car("Toyota", "Camry", 2022);
  myCar.displayInfo();
}
