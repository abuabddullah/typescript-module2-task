/* 
Task 4: Union and Intersection Types
Objective: Create union and intersection types using interfaces.

Instructions:

Define interfaces Book and Magazine.
Create:
A type that is a union of Book and Magazine.
A type that is an intersection of Book and Magazine.
*/

{
  //
  interface BookType {
    title: string;
    author: string;
  }

  interface MegazineType {
    title: string;
    date: Date;
  }

  type ShortNoteType = BookType | MegazineType;

  type BroadNoteType = ShortNoteType &
    MegazineType & {
      personalUnderstanding: string;
    };

  const myShortNote1: ShortNoteType = {
    title: "title",
    author: "author",
  };

  const myShortNote2: ShortNoteType = {
    title: "title",
    date: new Date(),
  };

  console.log({ myShortNote1 });
  console.log({ myShortNote2 });

  const myBoradNote: BroadNoteType = {
    title: "title",
    date: new Date(),
    author: "author",
    personalUnderstanding: "my personal Understanding is this",
  };

  console.log({ myBoradNote });
  //
}
