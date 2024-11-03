/* 
Task 10: Nullish Coalescing
Objective: Handle null and undefined values using nullish coalescing.

Instructions:

Write a function getDisplayName(name: string | null | undefined): string that returns "Anonymous" if name is null or undefined.
*/

{
  function getDisplayName(name: string | null | undefined): string {
    return name || "Anonymous";
  }

  const myName: string = getDisplayName("John");
  console.log({ myName });

  const hisName: string = getDisplayName(null);
  console.log({ hisName });

  const hisFriendsNmme: string = getDisplayName(undefined);
  console.log({ hisFriendsNmme });
}
