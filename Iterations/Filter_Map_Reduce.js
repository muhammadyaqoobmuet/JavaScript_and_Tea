// here are some More  array methods -> that loops array and return something

/*  ALL NOTES FOR THAT ARE WRTIITEN HERE AND CODE IMPLEMENTATION IS BELOW THE COMENT

1.Filter:
    Creates a new array with elements that satisfy a provided condition.
    Returns a new array containing only the elements that pass the condition.
2.Map:
    Creates a new array by calling a provided function on each element in the array.
    Returns a new array of the same length.
3.Reduce:
    Applies a function against an accumulator and 
    each element in the array (from left to right) to reduce it to a single value.
*/ 

const arr = [1,2,3,4,5,6,7,8,9,10];
const newArr = arr.filter((value)=>{
    return value%2 == 0;
});
// console.log(newArr);

//  EXMPLE OF FILER 
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // user adds filter and search for history book and we have to make sure that neew arr contains only hsitory books

  const historyBooks = books.filter((bookObjects)=> bookObjects["genre"]==='History')
  // console.log(historyBooks);

  // USE OF MAP 
  const array = [1, 2, 3];
const newArray = array.map(element => element * 2);

// THE DIFFERENCE BETWEEN MAP AND FILTER IS THAT FILTER CAN REDUCE LENGHT BUT MAP RETURN THE SAME


 const sumOfarray = array.reduce((accumelator,cuurent)=> accumelator+cuurent);
 console.log(sumOfarray); // 1+2+3 = 6