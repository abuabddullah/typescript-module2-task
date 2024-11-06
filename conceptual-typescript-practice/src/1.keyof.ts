{
  type TBook = {
    title: string;
    author: string;
    pubYear: number;
  };

  const book: TBook = {
    title: "Early to Bed",
    author: "Mr. Rise",
    pubYear: 2024,
  };

  function getValueOfProp<B, P extends keyof B>(objct: B, prop: P): B[P] {
    return objct[prop];
  }

  console.log(getValueOfProp(book, "title"));
}
