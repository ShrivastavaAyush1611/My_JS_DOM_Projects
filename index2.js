// const work ={
//       username : "ayush",
//       age: 18,
//  workspace : function() {
//       console.log(`${this.username}, is my name`);
//       console.log(this);
//    }

// }
// //console.log(user.workspace());
// work.workspace();
// work.username = "shreeya"
// work.workspace()
 
// function chai(){
//       let username = "hitesh"
//       console.log(this);
// }
// chai()
// const chai =function(){
//        username : "ayush"
//       console.log(this);
// }
// // const chai = () =>{
// //        username : "ayush"
// //       console.log(this);
// // }
// chai()
// const addtwo = (num1,num2) => {
//       return num1+num2;
// }
// console.log(addtwo(4,5));
// const adtwo = (num1,num2) => num1 +num2
// (() =>  {
//       console.log(17);
// })()
// const emtobj = {}

// if(Object.keys(emtobj).length===0){         //Object ke sare element arry me convert ho jayenge 
//       console.log("object is empty");     
// }
// const coding = [ "js", "cpp", "java", "ruby" ]
// coding.forEach( function (keys) {
//       console.log(coding);
// })
// coding.forEach( (value) => {
//     console.log(value);
// })
// const promiceOne = new Promise(function(resolve,reject){
//   setTimeout(function(ayu){
//     console.log("ayush");
//     resolve();
//   }, 1000);
// })

// promiceOne.then(function(){
//     console.log();
// })

// const promiceThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"ayushS",id:"12345"})
//     },1000)
// })

// promiceThree.then(function(user){
//       console.log(user.username);
//     //   return user.username;
// })
// const promiceFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username:"shreeya",Password:"12345678"})
//         }else{
//             reject("TERMINATED");
//         }
//     })
// })
// promiceFour.then(function(user){
//     console.log(user);
//     return user.username;
// }).then(function(usern){
//     console.log(usern);
// }).catch(function(){
//     console.log();
// })
// async function consumePromiceFour(){
//     let responce = await promiceFour;
//     console.log(responce);
// }
// console.log(promiceFour);
// consumePromiceFour()
// async function consumePromiceFour(){
//     try {
//         let responce = await promiceFour;
//         console.log(responce);
//     } catch (error) {
//         console.log(error);
//     }
// }


