{
    // Ternary || Nullish
    
    const age: number = 18;

    if(age >= 18){
        console.log("Adult")
    } else{
        console.log("Not Adult")
    }

    const isAdult = age >= 18? "adult" : "not adult"
    console.log({isAdult})

    // Nullish coalescing operator
    // Used when we need to make decision under `Null | Undefined` value

    const isAuthentic = null;

    const result1 = isAuthentic ?? 'Guest' // `??` nullish
    const result2 = isAuthentic ? isAuthentic : "Guest"; // `?` ternary
    console.log({result1}, {result2});

    type  User = {
        name : string;
        address : string;
        email?: string; // optional Chaining
        gender?: "Male" | "Female";
        bloodGroup?: "A+" | "A-" | "B+" | "B-"
    }

    const user : User ={
        name: "Tanvir",
        address: "Munshiganj"
    }

    const emailAddress = user?.email ?? "No Email"
    console.log({emailAddress});

    //
}