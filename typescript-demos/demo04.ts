
//namespace is a typescript features
namespace demo04{

    
    let a=20; //a is implicitly typed as number. it will not take any other type of value

    a='hi'; //must be a number

    let b: string; // b is of type string. but no value given

    b='hi'; //works fine
    b=20;   //can't be 20


    let c; // c can hold 'any' type
    c='hi'; //ok
    c=20;  //ok


    let d: any = 20 ; // d can hold anything. currently holding 20

    d='hi'; //allowed

    




    


}