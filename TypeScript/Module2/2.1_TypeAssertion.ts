{
    // Type Assertion
    // When type is not assign correctly or Ts have more options and we want to assign correct type as we want with type assertion.
    // Ts will work as we assign so we have to very careful about using assertion

    let anything : any;

    anything = 12;


    (anything as number).toString();
    // we get number type data use suggestions
   
    const kgToGm = (value : string | number) : string | number | undefined =>{
        if(typeof value === 'string'){
            const convertValue = parseFloat(value)*1000;
            return convertValue;
        }
        if(typeof value === 'number'){
            return value * 1000;
        }
    }

    const result1 = kgToGm(1000);
    //const result1: string | number | undefined
    // Type is union so we can set type using assertion
    const result2 = kgToGm(1000) as number;
    //const result2: number

    const res3 = kgToGm('10') as string;
    // const res3: string







    //
}