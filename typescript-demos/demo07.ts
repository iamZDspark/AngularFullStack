
//namespace is a typescript features
namespace demo07{

    //interface is a typescript feature for
    //compile time only. it is verified but not
    //translated to anything in javascript
    //it is simply removed.

    interface Name{
        firstName:string;
        lastName:string;
        middleName?:string;
    }

    interface  Person{
        name:Name|string;
        email: string|null;

    }
   

    let people: Person[]=[
        {name:'Vivek', email:'vivek@email.com'},
        {name:{firstName:'Shivanshi', lastName:'Mishra'},email:null}
    ];

    for(let person of people){
        console.log(person);
    }
}