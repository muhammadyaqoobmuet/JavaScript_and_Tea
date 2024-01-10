// OBJECT CAN BE MERGED LIKE ARRAY
const obj1 = {0:'a',1:'b'};
const obj2 = {0:'A',1:'B'};

const obj3 = {obj1,obj2}; // this will give nested objected which is not we want
// console.log(obj3); 
//{ obj1: { '0': 'a', '1': 'b' }, obj2: { '0': 'A', '1': 'B' } }'


// we can use Object.assign is a static method and reurn a object

// obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);

obj3 = {...obj1,...obj2};
console.log(obj3);