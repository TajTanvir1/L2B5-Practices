{
    // Learning Function

    // function name(params:types): return type{}
    function add(num1:number, num2:number) : number{
        return num1+ num2
    }

    add(1,2);

    const addArrow =(num1:number, num2:number):number => num1+num2;

    addArrow(3,4);

const user ={
    name: "Tanvir",
    balance : 0,
    addBalance(balance: number){
        return this.balance + balance
    }
}


const arr : number[] = [1,3,5];

const newArr = arr.map((elem:number): number => elem*elem)


}