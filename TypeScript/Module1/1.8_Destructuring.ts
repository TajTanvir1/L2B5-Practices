{
    // Destructuring

    const user ={
        id: 3,
        name:{
            firstName : "Tanvir",
            midName : "Ahamed",
            lastName : "Jubayer",
        },
        contactNo : "010000000",
        address : "Munshiganj"
    }

    const {
        contactNo : string, // when destructuring `:` use as name alias not type
        name : {midName : middleName},
    } = user


    const mentors = ["Mir", "Firoz", "Mizan", "Mir", "Firoz", "Mizan"];
    const [a,b, others] = mentors
    
    const mentors2 = ["Mir", "Firoz", "Mizan", "Mir", "Firoz", "Mizan"];
    const [,, c, ...rest] = mentors
    //this will skip  first 2 and c as index3, ...rest is others values
    //
}