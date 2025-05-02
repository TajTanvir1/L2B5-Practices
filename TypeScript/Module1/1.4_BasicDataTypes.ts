{
  // Basic Data Types

  //    ### Summary of Types in TypeScript:

  // * **Primitive Types**: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
  // * **Special Types**: `any`, `unknown`, `void`, `never`
  // * **Complex Types**: `Array`, `Tuple`, `Object`, `Enum`
  // * **Advanced Types**: `type` alias, `interface`, `Union`, `Intersection`, `Literal Types`

  // String
  let firstName: string = "Tanvir";

  // number
  let roll: number = 12;

  // boolean
  let isAdmin: boolean = true;

  // undefined
  let x: undefined = undefined;

  // null
  let y: null = null;

  //any - we should not use 
  // any type allows all types of data
  let d: any;
  d = "x";
  d = 12;
  d = true;


  //Array
  let friends : string[] = ['Salam', 'Shawon', 'Shojib'];

  let rollList : number[] = [1, 2, 3]

//   friends.push(1);
// we cannot push another data type

//Tuple - kind of array 
let info : [string , number, boolean] = ["Tanvir", 27, true]


}
