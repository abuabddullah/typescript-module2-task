{
  const movieName = "The Godfather";

  type TMovieNameType = typeof movieName;

  const newMovieName: TMovieNameType = "The Godfather";
  console.log("🚀 ~ newMovieName:", newMovieName);

  const bookName = {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
  };

  type TBookNameType = typeof bookName;

  const newBookName: TBookNameType = {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
  };
  console.log("🚀 ~ newBookName:", newBookName);
}
