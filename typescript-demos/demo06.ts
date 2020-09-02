
//namespace is a typescript features
namespace demo06{

    type Name={
        firstName:string,
        middleName?:string; //optional
        lastName:string
    }

    type Person={
        name:string | Name; //name could be string or Name
        email:string;
        phone?:string;  //opttional
    }

    let vivek:Person={

        name:'Vivek',
        email:'vivek@conceptarchitect.in',
        phone:'9939393' //optional
        //twitter:'@vivekdmishra' //not allowed

    }

    let shivanshi:Person={
        name: {firstName: 'Shivanshi', lastName:'Mishra'},
        email:'shivanshi@email.com'

    };

}