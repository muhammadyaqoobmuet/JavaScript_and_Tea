/**
 consider a senaroi where when we call a function it creates its execution context
 and this refers to it but what we we create function inside a funtion 
  and set username of anyother propperty to other funtion then as it will
  pop from stack its refrence will vanish so we dont get value eg
 */

  function setUserName(username){
    this.username = username;
  }

  function createUser (username,email,age){
            setUserName.call(this,username);  // this tell that use my this inside your funtion
            this.email = email;
            this.age = age;
  }

  const userOne = new createUser("jack","jack@fb.com",20);
  console.log(userOne); // we dont see any username  when there is no any call

