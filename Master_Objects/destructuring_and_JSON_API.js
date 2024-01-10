/*           $$$ OBBJECT DESTRUCTURING $$$$

   Object destructuring is a feature in JavaScript
   that allows you to extract properties from objects and bind them to variables. 
   his syntax provides a concise way to unpack values from objects,
   making your code more readable and efficient.
 
 */

   // Example object
const person = {
    firstName: 'Yaqoob',
    lastName: 'Ahmed',
    age: 19,
    country: 'PK'
  };
  
  // Object destructuring -- mostly used in react when passing refrence of anyother thing
  const { firstName:pehla_name, lastName, age, country } = person;
  // we can also change its name form here like above
  
  // Using the extracted values
  console.log(pehla_name); // Output: Yaqoob  
  console.log(lastName);  // Output: Ahmed
  console.log(age);       // Output: 19
  console.log(country);   // Output: PK