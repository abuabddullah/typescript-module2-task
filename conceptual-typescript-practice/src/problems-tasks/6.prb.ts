/* 
// You are given an object representing a book with properties title (string), author (string), and publishedYear (number). Use type alias for declaring the object. Write a TypeScript function called isRecentBook that takes this book object as input and determines if the book was published in the last 5 years.
*/
{
  type TBookType = {
    title: string;
    author: string;
    publishedYear: number;
  };

  const book: TBookType = {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publishedYear: 2016,
  };

  const isRecentBook = (objct: TBookType): boolean => {
    const currentYear = new Date().getFullYear();
    return currentYear - objct.publishedYear <= 5 ? true : false;
  };
  console.log("🚀 ~ isRecentBook ~ isRecentBook:", isRecentBook(book));
}
