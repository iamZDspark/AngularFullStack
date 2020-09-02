
//namespace is a typescript features
namespace demo05{


    let vivek={
        name:'Vivek Dutta Mishra',
        email:'vivek@conceptarchitect.in'
    };

    //vivek is an object of a special type which has
    //name and email property

    console.log(vivek);

    //vivek.phone='9036084835';  //this type doesn't allow phone number

    
    let sanjay: any ={
        name:'Sanjay',
        email:'sanjay@email.com'
    };

    console.log(sanjay);
    sanjay.phone='9393939393'; //it can hold phone as it is of type any
    console.log(sanjay);


}