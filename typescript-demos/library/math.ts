

export function sum(...numbers:number[]):number{
    let result=0;

    for(let number of numbers)
        result+=number;

    return result;
}

export function average(...numbers:number[]):number{
    return sum(...numbers)/numbers.length;
}

//module.exports={sum,average}