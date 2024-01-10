// The Object type represents one of JavaScript's data types. they are stored in heap
// It is used to store various keyed collections and more complex entities 

// ## WAYS TO CREATE OBJECTS
//Objects can be created using the Object() constructor or the object initializer / literal syntax.

 // NOTE OBJECTS  CREATED WITH Object Constructor are singleton eg
 // const myObj = Object.create();  this is how to create object with constructor

  // ## HOW TO CREATE OBJECT WITH Lireral syntax
 
// adding Symbol Datatype to object
 const smb =  Symbol("K1")

  const JsUser = {
    fname : " yaqoob " ,  // this behind is like "fname":"yaqoob"; but we genrally dont write that understood hai
    email : "yaqoobahahmed45700@gmail.com",
    "Personal Info":"###ENCRYPTED##",
    isActivate:true,
    //🔹 ✖  smb:"special-key", // we cant add symbol like this , this is string
    [smb]:"mexico",
    lastSeen:["monday","sunday"],
    greeting: function(){
      if(this.isActivate){
        console.log(`Hey Mr ${this.fname}, Welcome to Js`);
      }else{
        console.log("user is not active");
      }
    }
  };

  // How to acses these 2->types
 // console.log(JsUser.fname);
 // console.log(JsUser["Personal Info"]);
 // console.log( JsUser[smb]);    // correct way to acsses otherwise error :)


  // we can also change values and freeze it to lock values
  JsUser.email="22sw013@students.muet.edu.pk";
  //Object.freeze(JsUser); // this wont allow anyone to change properties
  //JsUser.email="22sw0133@students.muet.edu.pk";
 // console.log(JsUser.email); // still we get 22sw013@students.muet.edu.pk xD



  // ##### ADDING NEW DATATYPE TO OBJECT #######
  JsUser.newthing="we can add any datatype";
 // console.log(JsUser.newthing); // output : above statment
  
  // ## INVOKING METHOD AND USAGE OF THIS
  JsUser.greeting(); // by this method will be called and if we remove () reference will be given



  // #####  ACSSESING KEYS & VALUES : NOTE THAT IT WILL RETURN AN ARRAY AND WE CAN ADD ALL ARRAY OPERATIONS

  console.log(Object.keys(JsUser));
  console.log(Object.values(JsUser));

  // ####  ACSSESING [[KEY,VALUES]]  with Object.entries(obj name); this give each key,value in array and whole bound in another array
  console.log(Object.entries(JsUser));

  // ## CHEKING EITHER IT HAS SPECIFIC PROPERTIES

  console.log(JsUser.hasOwnProperty('greeting'));