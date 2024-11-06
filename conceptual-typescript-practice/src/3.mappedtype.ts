{
  type TPerson = { name: string; age: number };
  const person1: TPerson = { name: "John", age: 30 };

  console.log("🚀 ~ person1:", person1);
  /* use case of mapped type */
  type TOptPersonMappedType = {
    [Prop in keyof TPerson]?: TPerson[Prop];
  };

  const optPerson2: TOptPersonMappedType = {
    name: "asif",
  };
  console.log("🚀 ~ optPerson2:", optPerson2);

  type TOptPersonPartialType = Partial<TPerson>;
  const optPerson3: TOptPersonPartialType = {
    age: 40,
  };
  console.log("🚀 ~ optPerson3:", optPerson3);

  console.log(
    "🚀 ~ TOptPersonMappedType == TOptPersonPartialType:",
    typeof optPerson2 == typeof optPerson3
  );
}
