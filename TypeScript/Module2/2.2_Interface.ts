{
    // Interface
    /// Interface is works as type just its syntax has some difference from type

    // we cannot use interface in primitive types like we use type
    type RollNo = number;
    interface RollNo2 {
        // number;
    }
    
    // interface starts with {second brackets} and type works with = (equals) 
    
    
type User1 = {
    name : string;
    age : number;
    email : string,   
}

interface User2 {
    name : string;
    age: number;
    email : string;
}

const user : User1 ={
    name: "Tanvir",
    age : 26,
    email : "taj"
}
const user2 : User2 ={
    name: "Tanvir",
    age : 26,
    email : "taj"
}

// we can add more properties like this
type UserWithRoll = User1 & {role : string};

interface UserWithRoll2 extends User2{
    role : string;
}

const user3 : UserWithRoll2 ={
    name: "Tanvir",
    age : 26,
    email : "taj",
    role : "Manager"
}


    // Interface for Array 
    type Roll = number[];

    interface Roll2 {
        [index : number] : number;
    //   index of array is always count as number and we have to declare in interface like this
    // and after index : we have to assign the type of data
    }

    const rollNumber : Roll2 =[1,2,3]

    interface Roll3 {
        [index : number] : string;
    }

    const rollNumber3 : Roll3 = ['1', '2']
    // const rollNumber4 : Roll3 = [1,2] 
    //Type 'number' is not assignable to type 'string'.

    type Add = (num1:number, num2: number)=>number

    interface Add2 {
        (num1: number, num2 : number) : number
    }

    const add : Add2 = (num1, num2)=> num1+num2;


    //
}