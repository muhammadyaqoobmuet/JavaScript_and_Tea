// The forEach() method of Array instances executes a provided function once for each array element.
// this is used for array 
const arr = ["hey","jack"];
// this forEach return undefined
arr.forEach((value,index)=>{   // this takes parameter ( value, index, arayitself )
  //  console.log(`index ${index}  value ${value}  `);
})

// using on array of object
const usersArray = [
    {
      username: 'john_doe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@email.com',
      role: 'user'
    },
    {
      username: 'jane_smith',
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@email.com',
      role: 'user'
    },
    {
      username: 'admin_user',
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin.user@email.com',
      role: 'admin'
    }
  ];


  usersArray.forEach((eachObject)=>{
        if(eachObject["username"] === 'admin_user'){
           console.log(eachObject);  // going to print only that object
        }
  })