// creating promise 
// for revise https://javascript.info/promise-basics
// const p1 = new Promise((resolve,reject)=>{

//     console.log("contecting to server...");
//     // ayncs task
//     setTimeout(()=>{
//         console.log("data is fetching from server...");
//         resolve();
//     },3000)
// });


// using or consuming promise

// p1.then(()=>{
//     console.log("data is fetched, succesfully");
// })


// promise for reject 

// new Promise((resolve,reject)=>{

//     let userDisconeted = true;

//     setTimeout(()=>{
//         userDisconeted=false;
//     },2000)

//     setTimeout(()=>{
//         if(userDisconeted){
//             resolve({
//                 status: "inactive"
//             });
//         }
//         else{
//             reject({
//                 status: "active"
//             });
//         }
//     },3000)
// }).then((userStatus)=>{
//     console.log(` status :  ${userStatus.status}`);
// }).catch((userStatus)=>{
//     console.log(` status :  ${userStatus.status}`);
// }).finally(()=> console.log(` i will run either promise fullfill or not`))




// async await



const errorHandler = new Promise((resolve, reject) => {

    let error = true;

    setTimeout(() => {
        if (!error) {

            resolve("not any error");
        } else {

            reject("somehting went wrong");
        }
    }, 1000)

})



// create async function to handle aysync code

async function isPromiseConsumed() {
    // if there is not any error then it simple goes right but if it is 
    // it will give error so we will use try catch

    try {
        const reponse = await errorHandler;
        console.log(reponse);
    } catch (error) {
        console.log(error); 
    }


}

isPromiseConsumed();