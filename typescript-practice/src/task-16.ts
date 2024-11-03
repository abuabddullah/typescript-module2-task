/* 

*/

{
  const getObjPropValueGenFn = <X, Y extends keyof X>(
    obz: X,
    property: Y
  ): X[Y] => obz[property];

  console.log(
    getObjPropValueGenFn(
      {
        name: "John",
        age: 30,
      },
      "name"
    )
  );
}
