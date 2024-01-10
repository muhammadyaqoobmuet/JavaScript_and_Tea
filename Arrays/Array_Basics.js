// In Js arrays are dynamic in nature they are datastucure that can hold data of any time and their size 
// is dynamic in nature and we go through to the array by index values 


// ## WAYS TO CREATE AN ARRAY
const arr = [1,23,4,5,23,123,123]; // this is first way to create array Note: we can also add another DT
const newWayToCreateArr = new Array(1,2,3,4,5); // this is also the way to create an Array 


// THERE ARE SOME METHODS TO GO THROUGH TO MASTER THE ARRAYS

 /*
1.push(element1, ..., elementN):
        Adds one or more elements to the end of an array and returns the new length of the array.
 
2.pop():
        Removes the last element from an array and returns that element. This method modifies the array.
3.shift():
        Removes the first element from an array and returns that element. 
        This method modifies the array and shifts the remaining elements to a lower index.
4.unshift(element1, ..., elementN):
        Adds one or more elements to the beginning of an array and 
        returns the new length of the array. This method modifies the array.
5. indexOf(searchElement, fromIndex):
        return index of elemet if we do only array.indexOf(n); if it exists it return that index else
        -1 and if we give extra parameter it strat searching form there
 6.{
    ###### SPLIT WE HAVE COVERED THAT ON STRINGS ######
                let str = "apple,orange,banana";
        let fruits = str.split(",");
        // Output: ['apple', 'orange', 'banana']

 }
 ################ NOTE: METHOD NO 7 and 8 are MAIN METHODS MUST REMEBER THEIR DEIIFERENCES #######
 7.slice(start, end):
        Returns a shallow copy of a portion of an array. The start and 
        end parameters specify the range of elements to include. The end index is exclusive.

 8. splice(start, deleteCount, item1, item2, ...):

Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
 The start parameter is the index at which to start changing the array, and deleteCount 
 is the number of elements to remove.


 */

 // console.log(arr.push(999));   // returns new lenght of arr after adding to it
 // console.log(arr);            // [1,23,4,5,23,123,123,999] => length is 8
 // console.log(arr.pop());     //  999 return that deleted element
 // console.log(arr);          //   [1,23,4,5,23,123,123] 
 // console.log(arr.shift()); //   returns 1 which is deleted
 // console.log(arr);         //    [23,4,5,23,123,123] 

 // console.log(arr.unshift(1,23,"this is unshift method")); // 9
 // console.log(arr); //[ 1, 23, 'this is unshift method', 23, 4, 5, 23, 123, 123 ]
 // console.log(arr.indexOf(231));
  let slicedArray = arr.slice(0,4);
  // slicedArray.pop(); //this wont affect arr
  
   // console.log(slicedArray); //[ 1, 23, 4 ]
   // console.log(arr); //   [1,23,4, 5,23, 123, 123]  // original

    let splicedArray = arr.splice(0,3,1,2,3) // this 1222 will be aded to first index[0] where this extract

    console.log(splicedArray); //[1,23] this will extract that part from array
   console.log(arr);   // remaining array [ 4, 5, 23, 123, 123 ]
