{
  // nullable , Unknown, Never type

  //Null
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("Nothing to search");
    }
  };
  searchName(null);

  // Unknown
  // when we don't know the type earlier and gonna know in runtime

  const getSpeedPS = (value: unknown) => {
    if (typeof value === "number") {
      const convertSpeed = (value * 1000) / 3600;
      console.log(`The Value is ${convertSpeed}`);
    } else if (typeof value === "string") {
      const [value1, value2] = value.split(" ");
      const convertSpeed = (parseFloat(value1) * 1000) / 3600;
      console.log(`The speed is ${convertSpeed} ms^-1`);
    } else {
      console.log("Wrong Input");
    }
  };
  getSpeedPS(1000);
  getSpeedPS("1000  kmh^-1");

  // Never
  // When a function never return anything
  function throwError(msg: string): never {
    throw new Error(msg);
  }

  throwError("Error happened");

  //
}
