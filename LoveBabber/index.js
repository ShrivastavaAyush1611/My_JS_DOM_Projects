// 1st Lecture


        // let a='true'; 
        // console.log(a);

        // let person={
        //     firstName:'ayush',
        //     age:24,
        // };
        // console.log(person.age);
        // console.log(person.firstName);

        // let man=['love', 'rahul' ,'ayush','vansh','piyush'];
        // console.log(man[4]);


//     Lectur 2 of JS    ---->>



//object creation
        // let rectangle={
        //     length:16,
        //      breath:4,

        //      draw:function(){                                   //jb kisi object ke andr function call krte ha to use 'method' khte ha 
        //           console.log('drawing rectangle');
        //      }
        // };
       
        

// //factory function                                                           //the main objective of factory function is to create objects  
//         function createRectangle(len,bre) {    //factory function
//             return rectangle={
//                 length:len,
//                  breadth:bre,   //propeties
    
//                  draw(){     //function name    //method
//                       console.log('drawing rectangle');
//                  }
//             };
          
//         }

//         let a=createRectangle(5,4);
        
//Constructor Function   -->prop/method  -->intialise/Define    // in constructo funtion the object we create should start with capital letter 

// function Rectangle(len,bre) {
//     this. length=len;
//     this. breath=bre;
   
//     this.draw=function(){
//         console.log('drawing');
//     }

// }

//object creation using constructor function
// let rectangleObject= new Rectangle(4,6);     // rectangleObject ka constructor Rectangle ha lekin Ractangle ka constructor nehi pta kon ha ?

// rectangleObject.color='yellow';
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);

// let Rectangle1 = new Function( 
// 'length','breath',
// `this.length = length;
// this.breath = breath;
// this.draw=function() {
//     console.log('drawing');
// }`
// );

// let rect= new Rectangle1(2,3);

// console.log(rect);


// Types of JS
// 1. primitive JS or value type --> Nuber,String,boolean,undefined,Null
// 2. Reference type or Objects -->Function,object,array

// let a=10;      //this is primitive type of JS    // it is a type of pass by value
// let b=a;
// a++;
// console.log(a);
// console.log(b);

// let a={value:10}; // this is Reference type of JS in which we play with Addresses // it is a type of pass by reference
// let b=a;
// a.value++;
// console.log(a.value);
// console.log(b.value);




// let rectangle={
//     length:2,
// length:3,
// length:4,
// length:8,
// breath:9,
// breath:15,
// length:56,
//     breath:6,
    
// };


// //for-in loop
// for(let key in rectangle){
//     //keys are reflected through key variable
//     //value are reflected through 
//     console.log(key,rectangle[key]);
// }


// //for-of loop     //--> applied on iterables
// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }

// if('length' in rectangle){
//     console.log('present');
// }
// else{
//     console.log('absent');
// }



// //#Clonning 1-->By iterating
// let src={
//     a:10,
//     b:6,
//     c:9
// };
// let dest={};

// for(key in src){
//     dest[key]=src[key];
// }
// console.log(dest);




//#Clonning 2--> Assigning
// let dest=Object.assign({},src);      //  --> iss khali box me src ki saari values aagyi the us khali bax ka naam dest hogya 
// console.log(dest);
// let src2={value:25};
// let dest = Object.assign({},src,src2);    //  -->src2 ki value src ke ander aagyi and then we have clone in dest
// console.log(dest);


//#Clonning 2--> Scale
// let dest={...src};
// console.log(dest);




// ****************3rd &&  4th  Lectures*******************88 


// console.log('kase ho sare');

//There are two types of string present in JS 
// 1.Primitive
// 2.Object 

// let lastName='Babber';               // ye ek string ha                -->Primitive
// lastName.length;                     //conversion of string to object  
// let firstName=new String('love');    //ye ek object ha                 -->Object

// let message='this is my first message';
// let edit='ayush';
// let message2=
// `this 
// is 
// my second ${edit}                    //--> ${}= this is a place holder   
//  message`
// let words = message.split(' ');
// let words2= message2.split(' ');
// console.log(message2);
// console.log(message); 
// console.log(words2);
// console.log(words);



// let date= new Date();
// console.log(date);

// let date1=new Date('June 20 1998 07:15');
// console.log(date1);

// let date2=new Date(2004 , 0, 16, 7);
// date2.setFullYear(2005);
// console.log(date2);




// let numbers=[1,4,6,9];
// //

// console.log(numbers); 
// var a= 5;
// console.log(a);
// {
// var a=7;
// console.log(a);
// }
// console.log(a);



// let cources=[
//         {no:1, name:'love'},
//         {no:2, name:'ayush'}
// ];
// console.log(cources);
// console.log(cources.indexOf({no:1,name:'love'}));   //the above  " {no:1, name:'love'}" function is of diff address and  this" {no:1, name:'love'}"is of diff adress

// let numbers=[1,4,6,8,9];
//  console.log(numbers.includes(7));    //main function is to return wheather the function is present or not   //return true or false
//  console.log(numbers.indexOf(8));     //it return the index of the particular number mentioned
//  console.log(numbers.indexOf(4,2));     //searching the value 4 from index 2

//Method-1
// let x=cources.find(function(cources){
//         return cources.name=='love';
// })
// console.log(x);

//Method-2
// let x=cources.find(x=>x.name=='love');

// function(x){
//         return x.name=='love';
// }
// console.log(x);

// let numbers=[1,4,6,9,3,7];
// // numbers.pop();           //delete from end
// // numbers.shift();          //delete from beginning
// // numbers.splice(2,1);      //delete from middle (index,how many numbers to delete)
// // console.log(numbers);


// let numbers2=numbers; 
// //numbers=[];                           //-->M1                           //Adress in which numbers is stored is replaced by numbers2
// //numbers.length=0;                     //-->M2     //Same-->address
// //numbers.splice(0,numbers.length);     //--M3     //Same-->address
// console.log(numbers);
// console.log(numbers2);

//  let first=[1,2,3,4,5];
//  let second=[6,7,8,9,10];
//  let x= first.concat(second);        //To merge two different array
//  console.log(x);
// let combined=[...first,...second];     //Another way to merge two array  //Spread Operator
// console.log(combined);
// let copy=[...combined];             //use to copy the merged array

// let sliced=x.slice(2,4);             //first is index value and second is index+1 value
// console.log(sliced);

 //let numbers3=[1,2,3,4,5,6];
// for(let value of numbers3){
//         console.log(numbers3);
//       // console.log(value);
// }
// for(let value of first){
//         console.log(x);
// }
// numbers3.forEach(function(number){            //Another method to itrate an array
//       console.log(number)
// })
// numbers3.forEach(number=>          //Another method to itrate an array
//  console.log(number)               //Arrow method
// );

 //let arr=[10,20,30,40];
//  let x=arr.join('*');              //print the arr->  10*20*30*40
//  console.log(x);

// let mesg='this is the first msg';
// let parts=mesg.split(' ');                //this will creat an arry  of string 
// console.log(parts);                       //['this', 'is', 'the', 'first', 'msg']

// let x=parts.join('_');                     //this_is_the_first_msg 
// console.log(x);

// let arr=[4,3,1,5,2];
// arr.sort();
// console.log(arr); 


// let number=[1,2,-1,-4];
// let filter = number.filter(function(value){               //Filter function
//            return value>=0;
// });
// console.log(filter);
// let x = number.filter(value=>value>0  );             //Filter function by arrow method 
// console.log(x);

// let numbers=[7,8,9,5];
// console.log(numbers);
// let item = numbers.map(function(value){               // Mapping Function 
//         return 'student_no'+value;
// });
// console.log(item); 

// let item2 = numbers.map(value=>'student_no'+value);
// console.log(item2);

//let numbers = [1,2,-6,-9];
// let filtered=numbers.filter(value=>value>=0);
// let item = filtered.map(function(num){
//         return {value:num};
// });

//let item=numbers
//             .filter(value=> value>=0)
//             .map(num =>{value:num});
// console.log(item);



//FUNCTION->the block of code that fulfil a specific task

// run();   //hosting and it will work only in function declaration
// function run(){         //functon declaration
//         console.log('running');
// };
// run();      //function call / invoke 

//function assignment
// let stand=function walk(){
//         console.log('walking');
// };
// stand();    
// let jump=stand;
// jump();  

//Anonymous function assignment
// let stand2 = funtion(){
//         console.log('sleeping');
// };
// stand2();

//  function sum(a,b){
//         return a+b;
//  }
//  console.log(sum(1,2));

//  function sum(a,b){                    //Arguments
//         console.log(arguments);
//         return a+b;
//  }
//  let ans=sum(1,2,3,4);


//  function sum2(a,b){
//         let total=0;
//         for(let value of arguments)
//         total=total+value;
//         return total;
        

//  }
//  let ans2=sum2(1,2,3,4,5,6);
//  console.log(ans2);

 
//GETTER SETTER

//getter -> access properties
//setter -> change or mutate properties
// let person = {
//         fName : 'Love',
//         LName : 'Babber',
//         get fullName(){
//         return `${person.fName}  ${person.LName}`;
// },
// set fullName(value){
//         let parts = value.split('');
//         this.fName = parts[0];
//         this.LName = parts[1];
// }
// };
// person.fullName='Rahul Kumar';
// console.log(person.fullName);
// // function fullName(){
// //         return `${person.fName}  ${person.LName}`     //read only function
// // }
// // console.log(fullName());


// TRY AND CATCH -> ERROR HANDELING

// let person = {
//                 fName : 'Love',
//                 LName : 'Babber',
//                 get fullName(){
//                 return `${person.fName}  ${person.LName}`;
//         },
//         set fullName(value){
//                 if(typeof value != 'string'){
//                         throw new Error("you have not sent a string");
//                 }
//                 let parts = value.split('');
//                 this.fName = parts[0];
//                 this.LName = parts[1];
//         }
//         };

//         try{
//                 person.fullNamellName=true;
//         }
//         catch(e){
//                 alert(e);
//         }
//         console.log(person.fullName); 

 
let arr=[1,2,3,4,5,6];
// let total=0;
// for(let value of arr)
//         total=total+value;

// console.log(total);

let totalSum = arr.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(totalSum);       //this is also the different method to calculate the sum of an array
//accumulator-> call back funtion,(playing the role of total=0 in the above code )
//currentvalue->playing the role of loop



   
 