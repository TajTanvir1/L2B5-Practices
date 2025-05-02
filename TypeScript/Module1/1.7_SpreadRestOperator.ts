{
  // Spread Operator / Rest / Destructuring

  const bros1: string[] = ["Mir", "Firoz", "Mizan"];
  const bros2: string[] = ["Tanmoy", "Nahid", "Rahat"];

  // bros1.push(bros2); // Argument of type 'string[]' is not assignable to parameter of type 'string'.

  bros1.push(...bros2);

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };
  const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  const greetFriends = (...friends: string[])=>{
    friends.forEach((friend: string) => console.log(`Hi ${friend}`))
  }

greetFriends("Mir", "Firoz", "Mizan", "Mir", "Firoz", "Mizan")

}
