{
  // Type Alias

  type Student = {
    //type alias first latter should Capital
    name: string;
    age: number;
    gender: string;
    contact: string;
  };

  const Student1: Student = {
    name: "Tanvir",
    age: 27,
    gender: "Male",
    contact: "010000000",
  };

  const Student2: Student = {
    name: "Jubayer",
    age: 27,
    gender: "Male",
    contact: "010000000",
  };

  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "Tanvir";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
  add(2,4);
//   add("sd", 2); //Argument of type 'string' is not assignable to parameter of type 'number'

  //
}
